/* ===== Hỗ trợ chẩn đoán đau khớp cùng chậu — giao diện (dùng DX từ sijdx_core.js) =====
   Không lưu và không gửi đi bất kỳ dữ liệu nào: chọn xong đóng trang là mất (cố ý, để không giữ thông tin bệnh nhân). */
(function(){
  const st=document.createElement("style");
  st.textContent=".dxsec{width:100%;display:flex;justify-content:space-between;align-items:center;gap:8px;min-height:var(--tap);border:0;border-top:1px solid var(--line);background:var(--card);color:var(--ink);font-weight:750;font-size:14.5px;padding:8px 14px;cursor:pointer;text-align:left}.dxsec small{color:var(--muted);font-weight:600;white-space:nowrap}.dxrow{padding:9px 14px;border-top:1px solid var(--line)}.dxq{display:block;font-size:14px;line-height:1.4;margin-bottom:7px}.dxq .chips{display:inline-flex;gap:4px;margin-left:6px;vertical-align:middle}.dxseg{display:flex;flex-wrap:wrap;gap:6px}.dxseg button{min-height:38px;padding:6px 12px;border:1.5px solid var(--line);background:var(--bg);color:var(--ink);border-radius:9px;font-weight:650;font-size:13.5px;cursor:pointer}.dxseg button[aria-pressed=true]{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}.dxseg button.dn[aria-pressed=true]{background:var(--muted);border-color:var(--muted)}.dxbar{display:flex;flex-wrap:wrap;gap:6px;padding:10px 14px}.dxbar button{min-height:38px;padding:6px 11px;border:1.5px solid var(--t-sij);background:var(--card);color:var(--t-sij);border-radius:9px;font-weight:700;font-size:13px;cursor:pointer}.dxbar button.clr{border-color:var(--danger);color:var(--danger)}.dxbox{margin:10px 14px;padding:10px 12px;border-radius:11px;font-size:14px;line-height:1.5;background:var(--bg);border:1px solid var(--line)}.dxbox.red{background:var(--danger-soft);border-color:var(--danger)}.dxbox.warn{background:var(--warn-soft);border-color:var(--warn)}.dxbox.ok{background:var(--ok-soft);border-color:var(--ok)}.dxbox.acc{background:var(--accent-soft);border-color:var(--accent)}.dxbox b.h{display:block;margin-bottom:4px}.dxbox .chips{display:inline-flex;gap:4px;margin-left:4px;vertical-align:middle}.dxlist{margin:4px 0 0;padding-left:20px}.dxlist li{margin:3px 0}.dxm{font-weight:800;display:inline-block;min-width:18px}.dxm.y{color:var(--ok)}.dxm.n{color:var(--danger)}.dxm.q{color:var(--muted)}.dxlad{list-style:none;margin:6px 0 0;padding:0}.dxlad li{padding:6px 0;border-top:1px dashed var(--line)}.dxlad li.next{font-weight:750}.dxfoot{font-size:12.5px;color:var(--muted);line-height:1.5}";
  document.head.appendChild(st);
})();

const dxS={}; const dxOpen={hx:true};
const dxChip=c=>c&&c.length?`<span class="chips">${c.map(n=>`<button class="chip" data-dxgo="${n}" title="Mở Chương ${n}">Ch${n}</button>`).join("")}</span>`:"";
const dxMark=s=>s==="y"?`<span class="dxm y">✓</span>`:s==="n"?`<span class="dxm n">✗</span>`:`<span class="dxm q">?</span>`;
const dxCrit=(items,extra)=>`<ul class="dxlist" style="list-style:none;padding-left:0">${items.map(i=>`<li>${dxMark(i.s)} ${esc(i.t)}${i.h&&i.s==="?"?` <small class="muted">(${esc(i.h)})</small>`:""}</li>`).join("")}</ul>`+(extra||"");

function dxItemHtml(it){
  const val=dxS[it.k]||"";
  const ctl=it.type==="tri"
    ? [["y","Có"],["n","Không"]].map(([v,l])=>`<button data-dxset="${it.k}" data-v="${v}" class="${v==="n"?"dn":""}" aria-pressed="${val===v}">${l}</button>`).join("")
    : it.opts.map(([v,l])=>`<button data-dxset="${it.k}" data-v="${v}" aria-pressed="${val===v}">${esc(l)}</button>`).join("");
  return `<div class="dxrow"><span class="dxq">${esc(it.t)}${it.ext?` <small class="muted">(ngoài sách — an toàn)</small>`:""}${dxChip(it.c)}</span><div class="dxseg">${ctl}</div></div>`;
}

function dxResultHtml(R){
  if(R.empty) return `<div class="card" id="dxres"><h2>Gợi ý</h2><div class="dxbox">Hãy chọn các dữ kiện ở trên (mục nào chưa biết thì để trống). Gợi ý sẽ hiện ở đây. <b>Để trống nghĩa là “chưa rõ”, không tính là “không”.</b></div></div>`;
  let h=`<div id="dxres"></div>`;
  const reds=R.next.filter(x=>x.k==="red");
  if(reds.length) h+=`<div class="card"><h2>⚠ Ưu tiên xử lý trước</h2>${reds.map(x=>`<div class="dxbox red">${esc(x.t)}${dxChip(x.c)}</div>`).join("")}<div class="note">Khi có dấu hiệu cảnh báo, tạm gác lộ trình điều trị đau SIJ cho đến khi loại trừ.</div></div>`;
  // mức ủng hộ chẩn đoán SIJ
  const L={confirmed:["ok","Đã xác nhận bằng phong bế trong khớp (giảm đau ≥ 50%) — thỏa tiêu chuẩn chẩn đoán SIJ của sách"],high:["acc","Khả năng cao theo sách (≥ 3/5 nghiệm pháp kích thích + vùng đau phù hợp) — chưa xác nhận bằng phong bế"],suspect:["warn","Nghi ngờ lâm sàng — chưa đủ tiêu chí"],none:["","Chưa đủ dữ kiện để nghĩ tới đau do SIJ"]}[R.level];
  const warnOther=(R.spaFlag||R.infFlag||R.hipSig.length||R.lumSig.length)&&R.level==="confirmed"?`<div class="note" style="margin-top:6px">Phong bế dương KHÔNG loại trừ các nguyên nhân khác đang được gợi ý bên dưới.</div>`:"";
  h+=`<div class="card"><h2>1. Mức ủng hộ chẩn đoán đau do SIJ</h2><div class="dxbox ${L[0]}"><b class="h">${esc(L[1])}</b>${R.against?`<div>Phong bế trong khớp < 50%: <b>không ủng hộ</b> nguồn đau từ bên trong khớp.</div>`:""}${warnOther}</div>
   <div class="dxbox"><b class="h">Tiêu chuẩn IASP 1994 (Ch3) — 3 điều kiện</b>${dxCrit(R.iasp)}</div>
   <div class="dxbox"><b class="h">Cụm nghiệm pháp kích thích: dương khi ≥ 3/5 ${dxChip([3])}</b>
    <div>Laslett 2005 (distraction, compression, thigh thrust, sacral thrust, Gaenslen): dương <b>${R.las.pos}/5</b>${R.las.unk?`, chưa khám ${R.las.unk}`:""} — ngưỡng ≥ 3/5: nhạy 93,8%, đặc hiệu 78,1%.</div>
    <div>van der Wurff (distraction, compression, thigh thrust, FABER, Gaenslen): dương <b>${R.vdw.pos}/5</b>${R.vdw.unk?`, chưa khám ${R.vdw.unk}`:""} — ngưỡng ≥ 3/5: nhạy 85%, đặc hiệu 79%.</div>
    <div class="note" style="margin:6px 0 0;padding:6px 0;background:none;border:0">Lưu ý của sách: Schneider 2020, Maigne và Dreyfuss không thấy nghiệm pháp nào (đơn lẻ hay phối hợp) dự đoán đáp ứng tiêm → thường cần phong bế chẩn đoán.</div></div></div>`;
  // chẩn đoán khác
  const sec=(t,cls,body,c)=>`<div class="dxbox ${cls}"><b class="h">${esc(t)}${dxChip(c)}</b>${body}</div>`;
  const ul=a=>`<ul class="dxlist">${a.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
  let o="";
  o+=sec("Viêm cột sống thể trục / viêm khớp cùng–chậu do bệnh viêm",R.spaFlag?"warn":"",`<div>Đau kiểu viêm: <b>${R.ibp.pos}/4</b>${R.ibp.unk?` (chưa hỏi ${R.ibp.unk})`:""} — ≥ 2/4 ở người < 50 tuổi là sàng lọc dương.</div>${R.spaSig.length?ul(R.spaSig):`<div class="muted small">Chưa có dữ kiện gợi ý.</div>`}`,[3,2]);
  o+=sec("Nhiễm trùng SIJ (và Brucella)",R.infFlag?"red":"",R.infSig.length?ul(R.infSig):`<div class="muted small">Chưa có dữ kiện gợi ý.</div>`,[2]);
  const oth=[];
  if(R.hipSig.length) oth.push("Khớp háng: "+R.hipSig.join("; "));
  if(R.lumSig.length) oth.push("Cột sống thắt lưng: "+R.lumSig.join("; "));
  if(R.tumorFlag) oth.push("Nghi u xương cùng / chậu");
  if(R.fxFlag) oth.push("Nghi gãy xương cùng / chậu");
  if(R.crystalFlag) oth.push("Bệnh tinh thể (gút, CPPD)");
  o+=sec("Nguồn đau khác / bệnh khác cần loại trừ",oth.length?"warn":"",oth.length?ul(oth):`<div class="muted small">Chưa có dữ kiện gợi ý (hãy nhập hình ảnh để loại trừ háng và thắt lưng).</div>`,[16,2,3]);
  o+=sec("Nguồn đau NGOÀI khớp: thần kinh mông giữa và dây chằng cùng–chậu sau",(R.mcnPos>=3||R.lpsl)?"warn":"",`<div>Tiêu chí kẹt thần kinh mông giữa (Hộp 11.1): đạt <b>${R.mcnPos}/5</b></div>${dxCrit(R.mcnItems)}${R.lpsl?`<div>Tiêm quanh LPSL giảm đau rõ → gợi ý nguồn đau ngoài khớp.</div>`:""}<div class="note" style="margin:6px 0 0;padding:6px 0;background:none;border:0">Sách liệt kê 5 tiêu chuẩn, không nêu ngưỡng đạt.</div>`,[11]);
  if(R.preg) o+=sec("Thai kỳ / sau sinh","",`<div>Relaxin làm lỏng khớp; nguy cơ khi forceps, cơn co mạnh, thai to. Khi tiêm: ưu tiên siêu âm.</div>`,[2,6]);
  h+=`<div class="card"><h2>2. Các chẩn đoán khác cần cân nhắc / loại trừ</h2>${o}</div>`;
  // xử trí
  const main=R.next.filter(x=>x.k!=="red");
  let lad="";
  const firstUndone=R.ladder.findIndex(s=>!s.done);
  lad=`<ol class="dxlad">${R.ladder.map((s,i)=>`<li class="${(!R.anyRed&&i===firstUndone&&!R.empty)?"next":""}">${s.done?"✓":(i===firstUndone&&!R.anyRed?"▶":"○")} ${esc(s.t)}${dxChip(s.c)}</li>`).join("")}</ol>`;
  h+=`<div class="card"><h2>3. Đề xuất xử trí (theo sách)</h2>${main.length?main.map(x=>`<div class="dxbox ${x.k==="main"?"acc":x.k==="warn"?"warn":""}">${esc(x.t)}${dxChip(x.c)}</div>`).join(""):`<div class="dxbox">Chưa có đề xuất — hãy nhập thêm dữ kiện.</div>`}
   <div class="dxbox"><b class="h">Bậc thang điều trị (✓ đã làm · ▶ bước kế tiếp)</b>${lad}</div></div>`;
  // tiêu chí hàn
  h+=`<div class="card"><h2>4. Ứng viên hàn khớp: 7 tiêu chí ISASS/NASS ${dxChip([16])}</h2>
   <div class="dxbox ${R.fusPos===7&&!R.fusContra.length?"ok":""}"><b class="h">Đạt ${R.fusPos}/7 · chưa rõ ${R.fusUnk} · không đạt ${R.fusNeg}</b>${dxCrit(R.fusion)}</div>
   ${R.fusContra.length?`<div class="dxbox red"><b class="h">Chống chỉ định đang có</b>${ul(R.fusContra)}</div>`:""}
   ${R.fusOpt.length?`<div class="dxbox warn"><b class="h">Cần tối ưu trước mổ</b><ul class="dxlist">${R.fusOpt.map(x=>`<li>${esc(x.t)}${dxChip(x.c)}</li>`).join("")}</ul></div>`:""}
   <div class="note">Sách cũng nêu không chỉ định hàn khi: đau < 6 tháng, chưa điều trị bảo tồn, đau chưa được xác nhận bằng đáp ứng tiêm trong khớp, hoặc có bệnh lý khác ngăn lợi ích.</div></div>`;
  h+=`<div class="card"><h2>5. Kích thích thần kinh ngoại biên (PNS): 4 tiêu chí ${dxChip([11])}</h2><div class="dxbox"><b class="h">Đạt ${R.pnsPos}/4</b>${dxCrit(R.pns)}</div><div class="note">Chỉ định khi triệu chứng kháng trị với vật lý trị liệu, thuốc, TENS, phong bế / tiêm và đã loại trừ bệnh sửa được. Chống chỉ định: rối loạn đông máu, nhiễm trùng vị trí mổ, bệnh tâm thần, phong bế chẩn đoán thất bại.</div></div>`;
  if(R.missing.length) h+=`<div class="card"><h2>Dữ kiện còn thiếu — nên làm tiếp</h2><div class="dxbox warn"><ul class="dxlist">${R.missing.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div></div>`;
  return h;
}

function dxView(){
  const R=DX.evaluate(dxS);
  const answered=g=>g.items.filter(i=>dxS[i.k]).length;
  const groups=DX.GROUPS.map(g=>`<button class="dxsec" data-dxtoggle="${g.id}" aria-expanded="${!!dxOpen[g.id]}"><span>${dxOpen[g.id]?"▾":"▸"} ${esc(g.t)}</span><small>${answered(g)}/${g.items.length}</small></button>${dxOpen[g.id]?g.items.map(dxItemHtml).join(""):""}`).join("");
  return `<div class="card"><h2>🩺 Hỗ trợ chẩn đoán đau khớp cùng chậu</h2>
   <div class="dxbox acc">Chọn các dữ kiện bệnh sử, khám, hình ảnh, phong bế đã có (mục chưa biết thì <b>để trống = “chưa rõ”</b>). Công cụ đối chiếu với <b>tiêu chí nêu trong sách</b> rồi gợi ý các chẩn đoán cần cân nhắc và lộ trình xử trí; chạm nhãn “Ch…” để mở chương gốc. Không lưu và không gửi đi thông tin nào.</div>
   <div class="dxbar"><button data-dxjump="1">Xem gợi ý ↓</button>${DX.SAMPLES.map((s,i)=>`<button data-dxsample="${i}">Ca mẫu ${i+1}</button>`).join("")}<button class="clr" data-dxclear="1">Xóa tất cả</button></div>
   <div class="note">${DX.SAMPLES.map((s,i)=>`Ca mẫu ${i+1}: ${esc(s.name)}`).join(" · ")}</div>
   ${groups}</div>${dxResultHtml(R)}
   <div class="card"><div class="dxbox"><div class="dxfoot"><b>Lưu ý:</b> đây là công cụ học tập, tóm từ một cuốn sách (Abd-Elsayed &amp; Sayed, OUP 2022), không phải hướng dẫn thực hành chính thức và không thay thế phán đoán lâm sàng. Các tiêu chí có độ nhạy / đặc hiệu hạn chế (chính cuốn sách cũng nhấn mạnh phải phối hợp bệnh sử, khám, hình ảnh, xét nghiệm và phong bế chẩn đoán). Ngưỡng, thời gian ngưng thuốc và quyết định can thiệp cần đối chiếu hướng dẫn gốc và chỉ định của bác sĩ điều trị. Các mục ghi “ngoài sách” là nguyên tắc chung bổ sung để bảo đảm an toàn.</div></div></div>`;
}

document.addEventListener("click",e=>{
  const b=e.target.closest("[data-dxset],[data-dxtoggle],[data-dxsample],[data-dxclear],[data-dxgo],[data-dxjump],[data-sijdxopen]"); if(!b) return;
  if(b.dataset.sijdxopen!==undefined){sijDxOn=true;render();window.scrollTo(0,0);return;}
  if(b.dataset.dxgo!==undefined){const i=SIJ.findIndex(c=>c.id===Number(b.dataset.dxgo));if(i>=0){sijCh=i;sijDxOn=false;sijMode="sum";sijReset();render();window.scrollTo(0,0);}return;}
  if(b.dataset.dxtoggle){dxOpen[b.dataset.dxtoggle]=!dxOpen[b.dataset.dxtoggle];return render();}
  if(b.dataset.dxjump){const t=document.getElementById("dxres");if(t)t.scrollIntoView({behavior:"smooth",block:"start"});return;}
  if(b.dataset.dxclear){Object.keys(dxS).forEach(k=>delete dxS[k]);return render();}
  if(b.dataset.dxsample!==undefined){Object.keys(dxS).forEach(k=>delete dxS[k]);Object.assign(dxS,DX.SAMPLES[Number(b.dataset.dxsample)].S);DX.GROUPS.forEach(g=>dxOpen[g.id]=true);render();const t=document.getElementById("dxres");if(t)t.scrollIntoView({block:"start"});return;}
  if(b.dataset.dxset){const k=b.dataset.dxset,v=b.dataset.v;if(dxS[k]===v||v==="") delete dxS[k]; else dxS[k]=v; return render();}
});
