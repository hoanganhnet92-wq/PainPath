/* ===== Hỗ trợ chẩn đoán đau khớp cùng chậu — phần logic (thuần, kiểm thử được bằng node) =====
   Nguồn: Abd-Elsayed A, Sayed D (eds). Sacroiliac Joint Pain. OUP 2022 — các tiêu chí lấy NGUYÊN từ sách (không đặt trọng số riêng).
   Mục đánh dấu ext:true là kiến thức chung ngoài sách (chỉ để an toàn). "Chưa rõ" = thiếu dữ liệu, KHÔNG phải âm tính. */
const DX=(function(){
const T=(k,t,c,o)=>Object.assign({k,t,c:c||[],type:"tri"},o||{});
const S=(k,t,c,opts,o)=>Object.assign({k,t,c:c||[],type:"sel",opts},o||{});
const GROUPS=[
 {id:"hx",t:"1. Bệnh sử và đặc điểm đau",items:[
  T("h_site","Đau vùng mông / quanh gai chậu sau trên (PSIS) — trong khoảng 10 cm dưới và 3 cm ngoài PSIS",[3]),
  T("h_fortin","Chỉ được chỗ đau bằng MỘT ngón tay, ngay trong–dưới PSIS (trong 1 cm) — dấu Fortin",[11,16]),
  T("h_groin","Đau lan háng / đùi trên",[6]),
  T("h_knee","Đau lan xuống DƯỚI gối",[8]),
  T("h_aggr","Nặng hơn khi đi bộ, đứng dậy từ ghế, ngủ hoặc nằm đè bên đau",[6]),
  S("h_onset","Khởi phát",[3,2],[["","Chưa rõ"],["trauma","Sau chấn thương"],["cum","Do tích lũy"],["ins","Âm thầm"],["preg","Thai kỳ / sau sinh"]]),
  T("h_6m","Đau kéo dài ≥ 6 tháng",[16]),
  T("h_vas5","Đau vừa–nặng dai dẳng (thường ≥ 5/10)",[16]),
  T("h_preg","Đang mang thai",[2,6])]},
 {id:"ibp",t:"2. Gợi ý bệnh viêm (viêm cột sống thể trục)",items:[
  T("i_age50","Tuổi < 50",[3]),
  T("i_onset35","Đau bắt đầu trước 35 tuổi",[3]),
  T("i_morn","Cứng khớp buổi sáng > 30 phút",[3]),
  T("i_ex","Đau đỡ khi vận động, KHÔNG đỡ khi nghỉ",[3]),
  T("i_night","Đau làm thức giấc, chỉ ở nửa sau của đêm",[3]),
  T("i_alt","Đau mông luân phiên hai bên",[3]),
  T("i_assoc","Đã có / nghi viêm khớp vảy nến, viêm ruột, viêm khớp phản ứng (sau nhiễm khuẩn tiết niệu–sinh dục hoặc tiêu hóa) hoặc viêm cột sống dính khớp",[2,3])]},
 {id:"red",t:"3. Dấu hiệu cảnh báo — nhiễm trùng, u, gãy, tinh thể",items:[
  T("r_fever","Sốt kèm đau mông–thắt lưng–háng khởi phát cấp (có thể đau bụng dưới)",[2]),
  T("r_leg","Tư thế chân duỗi xoay ngoài, né chịu lực (co thắt cơ hình lê)",[2]),
  T("r_milk","Uống sữa chưa tiệt trùng / tiếp xúc nguồn lây Brucella",[2]),
  T("r_night","Đau về đêm, đáp ứng rõ với NSAID (gợi ý u xương dạng xương)",[2]),
  T("r_crystal","Có gút (tophi) hoặc vôi hóa sụn (CPPD)",[2]),
  T("r_trauma","Chấn thương vòng chậu năng lượng cao / nghi gãy",[2]),
  T("r_neuro","Yếu liệt tiến triển, tê vùng yên ngựa hoặc rối loạn cơ tròn",[],{ext:true})]},
 {id:"exam",t:"4. Khám lâm sàng",items:[
  T("e_sulcus","Ấn đau rãnh cùng (ngay trong PSIS) — nghiệm pháp sờ nhạy nhất",[3]),
  T("e_dist","Nghiệm pháp distraction (nằm ngửa, ấn hai gai chậu trước trên ra sau)",[3]),
  T("e_comp","Nghiệm pháp compression (nằm nghiêng, ép mào chậu)",[3]),
  T("e_thigh","Nghiệm pháp thigh thrust (háng 90°, ấn dọc đùi)",[3]),
  T("e_sac","Nghiệm pháp sacral thrust (nằm sấp, ấn xương cùng)",[3]),
  T("e_gaen","Nghiệm pháp Gaenslen (không làm khi đã thay khớp háng)",[3]),
  T("e_faber","FABER / Patrick: đau ở MÔNG / vùng SIJ",[3]),
  T("e_faber_g","FABER / Patrick: đau ở BẸN (gợi ý khớp háng)",[3]),
  T("e_mcnagg","Đau thắt lưng–mông nặng lên theo vận động / tư thế thắt lưng (đứng, gập, trở mình, ngồi lâu)",[11]),
  T("e_mcn35","Ấn đau khoảng 35 mm phía đuôi PSIS (điểm kẹt thần kinh mông giữa)",[11]),
  T("e_mcntrig","Ấn điểm kích hoạt gây tê / đau lan theo vùng thần kinh mông giữa",[11])]},
 {id:"inv",t:"5. Hình ảnh và xét nghiệm",items:[
  T("im_sac","Viêm khớp cùng–chậu trên MRI / X-quang / CT (phù tủy xương, bào mòn, xơ cứng, dính khớp)",[3]),
  T("im_deg","Thoái hóa SIJ trên CT / X-quang (hẹp khe, gai xương, xơ cứng) — lưu ý CT thoái hóa không tương quan triệu chứng",[3]),
  T("im_hip","X-quang khung chậu: bệnh khớp háng",[16]),
  T("im_lum","CT / MRI thắt lưng: hẹp ống sống, chèn ép rễ hoặc thoái hóa đáng kể",[16]),
  T("im_mass","Nghi u xương cùng / xương chậu",[16,2]),
  T("im_fx","Gãy xương cùng / chậu liên quan SIJ (kể cả không vững)",[16,2]),
  T("im_inf","Hình ảnh nghi nhiễm trùng SIJ",[2]),
  T("l_crp","CRP / tốc độ máu lắng tăng (không đặc hiệu)",[3,2]),
  S("l_b27","HLA-B27",[3],[["","Chưa làm"],["pos","Dương tính"],["neg","Âm tính"]])]},
 {id:"blk",t:"6. Phong bế chẩn đoán",items:[
  S("b_ia","Phong bế / tiêm thuốc tê trong khớp (dưới hình ảnh)",[3,16,18],[["","Chưa làm"],["ge50","Giảm đau ≥ 50%"],["lt50","Giảm đau < 50%"]]),
  S("b_lbb","Phong bế nhánh ngoài (LBB)",[7,8],[["","Chưa làm"],["ge50","Giảm đau ≥ 50%"],["lt50","Giảm đau < 50%"]]),
  T("b_peri","Tiêm quanh dây chằng cùng–chậu sau (LPSL) giảm đau rõ",[11]),
  T("b_mcn","Phong bế thần kinh mông giữa giảm triệu chứng",[11])]},
 {id:"tx",t:"7. Điều trị đã làm và yếu tố bệnh nhân",items:[
  T("t_cons","Đã điều trị bảo tồn ≥ 6 tháng (thuốc, vật lý trị liệu…)",[16,6]),
  S("t_inj","Tiêm steroid vào khớp",[6],[["","Chưa làm"],["long","Giảm đau kéo dài (≥ 3 tháng)"],["short","Giảm đau ngắn (< 3 tháng)"],["none","Không đáp ứng"]]),
  S("t_rfa","Đốt sóng cao tần (RFA)",[8],[["","Chưa làm"],["long","Giảm đau kéo dài (≥ 6 tháng)"],["short","Giảm đau ngắn (< 6 tháng)"],["none","Không đáp ứng"]]),
  T("t_fused","Đã hàn / cố định SIJ nhưng còn đau",[23]),
  T("x_lf","Tiền sử hàn cột sống thắt lưng(–cùng)",[16]),
  T("x_osteo","Loãng xương (T-score < −2,5)",[16]),
  T("x_smoke","Đang hút thuốc lá",[16]),
  T("x_dm","Đái tháo đường kiểm soát kém",[16]),
  T("x_psy","Rối loạn tâm lý / soma hóa / rối loạn đau toàn thể nặng",[16,11]),
  T("x_opioid","Dùng opioid thường xuyên",[8]),
  T("x_age65","Tuổi > 65",[8]),
  T("x_anticoag","Đang dùng thuốc chống đông / kháng tiểu cầu",[18]),
  T("x_metal","Dị ứng kim loại / thành phần implant",[16])]}
];

function evaluate(S){
 S=S||{};
 const v=k=>S[k]||"", y=k=>v(k)==="y", n=k=>v(k)==="n", st=k=>y(k)?"y":n(k)?"n":"?";
 const cnt=ks=>({pos:ks.filter(y).length,neg:ks.filter(n).length,unk:ks.filter(k=>!v(k)).length,n:ks.length});
 const R={missing:[],next:[],red:[],other:[]};
 const SIX=["e_dist","e_comp","e_thigh","e_sac","e_gaen","e_faber"];
 R.las=cnt(["e_dist","e_comp","e_thigh","e_sac","e_gaen"]);
 R.vdw=cnt(["e_dist","e_comp","e_thigh","e_faber","e_gaen"]);
 R.prov=cnt(SIX); R.provAny=R.prov.pos>0;
 R.provPos3=R.las.pos>=3||R.vdw.pos>=3;
 const reach3=c=>c.pos+c.unk>=3;
 R.provStatus=R.provPos3?"y":(!reach3(R.las)&&!reach3(R.vdw)?"n":"?");
 R.region=y("h_site")||y("h_fortin")||y("e_sulcus");
 R.iasp=[
  {t:"Đau ở vùng SIJ",s:st("h_site")},
  {t:"Tái hiện đau khi làm nghiệm pháp kích thích SIJ",s:R.provAny?"y":(R.prov.neg===6?"n":"?")},
  {t:"Giảm đau sau gây tê tại khớp",s:v("b_ia")==="ge50"?"y":v("b_ia")==="lt50"?"n":"?"}];
 R.level=v("b_ia")==="ge50"?"confirmed":(R.provPos3&&R.region)?"high":(R.region||R.provAny)?"suspect":"none";
 R.against=v("b_ia")==="lt50";
 // viêm cột sống thể trục (Ch3)
 R.ibp=cnt(["i_morn","i_ex","i_night","i_alt"]);
 R.spaScreen=R.ibp.pos>=2&&!n("i_age50");
 R.spaSig=[];
 if(R.spaScreen) R.spaSig.push("Sàng lọc dương: "+R.ibp.pos+"/4 dấu hiệu đau kiểu viêm (≥ 2/4 ở người < 50 tuổi: nhạy 70,3%, đặc hiệu 81,2%)");
 if(y("i_onset35")) R.spaSig.push("Đau khởi phát trước 35 tuổi (gặp nhiều hơn ở viêm cột sống dính khớp)");
 if(y("im_sac")) R.spaSig.push("Hình ảnh gợi ý viêm khớp cùng–chậu");
 if(y("i_assoc")) R.spaSig.push("Bệnh đi kèm / tiền sử thuộc nhóm viêm cột sống thể trục");
 if(v("l_b27")==="pos") R.spaSig.push("HLA-B27 dương tính (65,9% ở viêm cột sống thể trục nhưng cũng 27% ở người không mắc → không đặc hiệu)");
 if(y("l_crp")&&(R.spaSig.length)) R.spaSig.push("CRP / VS tăng (không đặc hiệu)");
 R.spaFlag=R.spaScreen||y("im_sac")||y("i_assoc");
 // nhiễm trùng / u / gãy / tinh thể / thần kinh (Ch2, Ch16)
 R.infSig=[];
 if(y("r_fever")) R.infSig.push("Sốt + đau mông–thắt lưng–háng khởi phát cấp");
 if(y("r_leg")) R.infSig.push("Chân duỗi xoay ngoài do co thắt cơ hình lê");
 if(y("r_milk")) R.infSig.push("Tiếp xúc nguồn Brucella (sữa chưa tiệt trùng)");
 if(y("im_inf")) R.infSig.push("Hình ảnh nghi nhiễm trùng");
 if(y("l_crp")&&R.infSig.length) R.infSig.push("CRP / VS tăng");
 R.infFlag=y("r_fever")||y("r_leg")||y("im_inf")||y("r_milk");
 R.infStrong=y("r_fever")&&(y("l_crp")||y("im_inf")||y("r_leg"));
 R.tumorFlag=y("r_night")||y("im_mass");
 R.fxFlag=y("r_trauma")||y("im_fx");
 R.crystalFlag=y("r_crystal");
 R.neuroFlag=y("r_neuro");
 R.anyRed=R.infFlag||R.tumorFlag||R.fxFlag||R.neuroFlag;
 // nguồn đau khác
 R.hipSig=[]; if(y("e_faber_g")) R.hipSig.push("FABER gây đau ở bẹn"); if(y("im_hip")) R.hipSig.push("X-quang: bệnh khớp háng");
 R.lumSig=[]; if(y("im_lum")) R.lumSig.push("CT / MRI thắt lưng có tổn thương đáng kể"); if(y("h_knee")) R.lumSig.push("Đau lan xuống dưới gối (kém điển hình cho SIJ)");
 R.mcnItems=[
  {t:"Đau thắt lưng lan xuống mông",s:st("h_site")},
  {t:"Nặng lên theo vận động / tư thế thắt lưng",s:st("e_mcnagg")},
  {t:"Ấn đau ~35 mm phía đuôi PSIS",s:st("e_mcn35")},
  {t:"Ấn điểm kích hoạt gây tê / đau lan vùng thần kinh mông giữa",s:st("e_mcntrig")},
  {t:"Giảm triệu chứng sau phong bế thần kinh mông giữa",s:st("b_mcn")}];
 R.mcnPos=R.mcnItems.filter(i=>i.s==="y").length;
 R.lpsl=y("b_peri");
 R.preg=y("h_preg")||v("h_onset")==="preg";
 // ----- ứng viên hàn (Ch16: 7 tiêu chí ISASS/NASS) -----
 const excl=R.anyRed||y("im_hip")||y("im_lum")||y("e_faber_g");
 R.fusion=[
  {t:"SIJ là nguồn đau chính, đã loại trừ chẩn đoán khác",s:excl?"n":(v("b_ia")==="ge50"&&n("im_hip")&&n("im_lum"))?"y":"?",h:"cần phong bế dương và hình ảnh háng + thắt lưng bình thường"},
  {t:"Rối loạn chức năng do vỡ khớp hoặc viêm khớp cùng–chậu thoái hóa (kể cả thai kỳ / sau sinh > 6 tháng; gãy liên quan SIJ)",s:(y("im_deg")||v("h_onset")==="preg"||y("im_fx"))?"y":"?"},
  {t:"Đau vừa–nặng dai dẳng (thường ≥ 5/10)",s:st("h_vas5")},
  {t:"Ấn đau mặt sau khớp và rãnh cùng (điểm Fortin)",s:st("e_sulcus")},
  {t:"≥ 3/5 nghiệm pháp kích thích dương",s:R.provStatus},
  {t:"Thất bại ≥ 6 tháng điều trị bảo tồn (thuốc, vật lý trị liệu, tiêm huỳnh quang, RFA)",s:n("t_cons")?"n":(y("t_cons")&&y("h_6m"))?"y":"?"},
  {t:"Giảm đau ≥ 50% sau tiêm thuốc tê vào SIJ dưới huỳnh quang",s:v("b_ia")==="ge50"?"y":v("b_ia")==="lt50"?"n":"?"}];
 R.fusPos=R.fusion.filter(i=>i.s==="y").length; R.fusNeg=R.fusion.filter(i=>i.s==="n").length; R.fusUnk=7-R.fusPos-R.fusNeg;
 R.fusContra=[];
 if(y("im_mass")) R.fusContra.push("U xương cùng / xương chậu");
 if(R.infFlag) R.fusContra.push("Nhiễm trùng hoạt động / nghi nhiễm trùng");
 if(y("im_fx")) R.fusContra.push("Gãy xương cùng / chậu liên quan SIJ (không vững là chống chỉ định)");
 if(y("x_metal")) R.fusContra.push("Dị ứng / không dung nạp kim loại hoặc thành phần implant");
 R.fusOpt=[];
 if(y("x_osteo")) R.fusOpt.push({t:"Loãng xương (T-score < −2,5): chống chỉ định tương đối; lỏng implant phía xương cùng là kiểu thất bại hay gặp nhất",c:[16]});
 if(y("x_smoke")) R.fusOpt.push({t:"Hút thuốc: bỏ thuốc 4–6 tuần trước mổ (người hút thuốc giảm đau kém hơn ~5,9 điểm VAS, tàn tật cao hơn)",c:[16]});
 if(y("x_dm")) R.fusOpt.push({t:"Đái tháo đường: tối ưu đường huyết (mục tiêu HbA1c an toàn < 8–9); nguy cơ nhiễm trùng, chậm lành vết mổ",c:[16]});
 if(y("x_psy")) R.fusOpt.push({t:"Rối loạn tâm lý / soma hóa nặng: liên quan đáp ứng kém với phẫu thuật; cần đánh giá và xử trí trước",c:[16]});
 if(y("x_lf")) R.fusOpt.push({t:"Từng hàn cột sống thắt lưng: đau SIJ gặp ở 43–61% sau hàn; có thể gây nhiễu nguồn đau — vẫn hàn SIJ được khi đã xác định SIJ là nguồn chính",c:[16]});
 if(y("x_anticoag")) R.fusOpt.push({t:"Thuốc chống đông / kháng tiểu cầu: lập kế hoạch ngưng–dùng lại theo Bảng 18.1–18.3 và hướng dẫn ASRA; hàn đường sau được đề xuất xếp nguy cơ chảy máu CAO",c:[18,22]});
 // ----- PNS (Ch11: 4 tiêu chí) -----
 R.pns=[
  {t:"Đau theo vùng cảm giác của một dây thần kinh ngoại biên",s:R.mcnPos>=3?"y":"?"},
  {t:"Phong bế thần kinh ngoại biên chẩn đoán dương",s:(y("b_mcn")||v("b_lbb")==="ge50")?"y":(n("b_mcn")&&v("b_lbb")==="lt50")?"n":"?"},
  {t:"Không có bệnh tâm lý / tâm thần nặng",s:y("x_psy")?"n":n("x_psy")?"y":"?"},
  {t:"Bệnh nhân có khả năng vận hành thiết bị",s:"?"}];
 R.pnsPos=R.pns.filter(i=>i.s==="y").length;
 // ----- các bậc xử trí -----
 const failTx=(v("t_inj")==="short"||v("t_inj")==="none"||v("t_rfa")==="short"||v("t_rfa")==="none"||v("b_lbb")==="lt50");
 R.ladder=[
  {t:"Điều trị bảo tồn (thuốc, giãn cơ, vật lý trị liệu, thuốc dán / kem)",c:[6],done:y("t_cons")},
  {t:"Phong bế chẩn đoán / tiêm steroid vào khớp dưới hình ảnh",c:[6,3],done:v("b_ia")!==""||v("t_inj")!==""},
  {t:"Phong bế nhánh ngoài (LBB) để chọn bệnh nhân cho RFA",c:[7],done:v("b_lbb")!==""},
  {t:"Đốt sóng cao tần (RFA)",c:[8],done:v("t_rfa")!==""},
  {t:"Hàn khớp (kiểm 7 tiêu chí) hoặc kích thích thần kinh ngoại biên (PNS)",c:[16,11],done:y("t_fused")},
  {t:"Khi hàn thất bại",c:[23],done:false}];
 // ----- đề xuất bước tiếp theo -----
 const N=(t,c,k)=>R.next.push({t,c:c||[],k:k||"info"});
 if(R.infFlag) N((R.infStrong?"NHIỀU dấu hiệu gợi ý nhiễm trùng SIJ — ưu tiên loại trừ ngay: ":"Có dấu hiệu gợi ý nhiễm trùng SIJ — cần loại trừ trước: ")+"CRP / VS, cấy máu (có thể âm tới 50%), hình ảnh SIJ. Nếu xác định: kháng sinh ≥ 4–8 tuần; Brucella: Rose bengal, doxycycline + rifampicin. Nhiễm trùng hoạt động không phải ứng viên hàn. Không tiêm steroid khi nghi nhiễm trùng (nguyên tắc chung, ngoài sách).",[2,16,22],"red");
 if(R.tumorFlag) N("Nghi u xương cùng / chậu: chụp MRI hoặc CT xương cùng–chậu và chuyển chuyên khoa; u xương cùng / chậu là chống chỉ định hàn. U xương dạng xương: đau đêm đáp ứng NSAID; chordoma là u ác nguyên phát hay gặp nhất ở vùng cùng–cụt.",[2,16],"red");
 if(R.fxFlag) N("Nghi gãy xương cùng / chậu: chụp CT khung chậu, phân loại theo mức lỗ cùng (type I trước lỗ S2, II đến S1–S2, III đến S1); gãy không vững là chống chỉ định hàn xâm lấn tối thiểu.",[2,16],"red");
 if(R.neuroFlag) N("Yếu liệt tiến triển / tê vùng yên ngựa / rối loạn cơ tròn không phải biểu hiện của SIJ: khám và chụp cột sống cấp (kiến thức chung, ngoài sách).",[],"red");
 if(R.crystalFlag) N("Bệnh tinh thể (gút, CPPD): chọc hút khớp và soi phân cực; điều trị NSAID, colchicine, corticosteroid.",[2],"info");
 const blocked=R.anyRed;
 if(R.spaFlag&&R.level!=="confirmed") N("Làm rõ bệnh viêm cột sống thể trục trước khi xem là đau cơ học: MRI SIJ (phù tủy xương, bào mòn, xơ cứng), HLA-B27, CRP / VS; nghiệm pháp Schober. Hàn SIJ không giúp nếu đau do bệnh viêm.",[3,2,18],"warn");
 if(R.hipSig.length) N("Nguồn đau từ khớp háng: chụp X-quang khung chậu AP, tiêm chẩn đoán khớp háng nếu còn mơ hồ.",[3,16,18],"warn");
 if(R.lumSig.length) N("Nguồn cột sống thắt lưng: đối chiếu CT / MRI thắt lưng; nếu bất thường, xem xét tiêm ngoài màng cứng, phong bế rễ chọn lọc hoặc khớp mấu trước khi quy cho SIJ (kém tin cậy hơn phong bế SIJ).",[16,18],"warn");
 if(R.mcnPos>=3||y("b_mcn")) N("Cân nhắc kẹt thần kinh mông giữa (đạt "+R.mcnPos+"/5 tiêu chí): phong bế thần kinh mông giữa để xác nhận; kháng trị thì xét PNS.",[11],"warn");
 if(R.lpsl) N("Tiêm quanh dây chằng cùng–chậu sau (LPSL) giảm đau rõ → gợi ý nguồn đau NGOÀI khớp (Murakami: tiêm quanh LPSL hiệu quả 25/25 so với trong khớp 9/25). Xem LBB và RFA nhắm nhánh ngoài.",[11,7],"info");
 if(R.preg) N("Đang mang thai: ưu tiên siêu âm thay vì huỳnh quang khi tiêm; dùng thuốc tê/ steroid theo cân nhắc nguy cơ–lợi ích.",[6],"info");
 if(!blocked){
  if(y("t_fused")){
   N("Đã hàn nhưng còn đau: rà soát yếu tố nguy cơ thất bại / giả khớp (hút thuốc, loãng xương, viêm khớp dạng thấp, đái tháo đường, cường cận giáp, dinh dưỡng kém, bệnh viêm toàn thân) và yếu tố thiết bị / đường mổ.",[23],"main");
   N("Lựa chọn khi hàn thất bại: RFA nhiệt nhánh sau chính L5 và nhánh ngoài S1–S3 (cooled RFA thành công 59% sau 9 tháng); kích thích thần kinh ngoại biên / điều hòa thần kinh (bằng chứng mức loạt ca). Allograft đặt sai lấy ra qua da khó; vít / nẹp lấy qua mổ mở; implant tam giác lấy ra nhiều bệnh suất.",[23],"main");
  }else if(R.level==="none"){
   N("Hoàn thiện đánh giá: khám đủ 5–6 nghiệm pháp kích thích, sờ rãnh cùng (điểm Fortin); chụp hình ảnh để LOẠI TRỪ nguồn khác (háng, thắt lưng, u, nhiễm trùng, bệnh viêm).",[3,16],"main");
  }else if(!y("t_cons")&&v("b_ia")===""&&v("t_inj")===""){
   N("Bước 1 — điều trị bảo tồn: thuốc, giãn cơ, NSAID, thuốc dán / kem, vật lý trị liệu; tư vấn kỳ vọng thực tế.",[6],"main");
   N("Bước 2 — xác nhận chẩn đoán bằng phong bế / tiêm thuốc tê (kèm steroid) vào khớp dưới huỳnh quang hoặc siêu âm; giảm đau thường kéo dài 3–4 tháng. Sách nhấn mạnh không nghiệm pháp khám nào đơn lẻ dự đoán được đáp ứng tiêm.",[6,3],"main");
  }else if(v("b_ia")===""&&v("t_inj")===""){
   N("Bước tiếp theo — phong bế chẩn đoán trong khớp dưới huỳnh quang hoặc siêu âm (tiêu chuẩn xác nhận SIJ; đồng thời có tác dụng điều trị 3–4 tháng).",[6,3],"main");
  }else if(R.against){
   N("Phong bế trong khớp < 50%: đau không được xác nhận là từ BÊN TRONG khớp → xem lại chẩn đoán (nguồn đau ngoài khớp như dây chằng cùng–chậu sau, thần kinh mông giữa; háng; thắt lưng). Không có chỉ định hàn khi chưa xác nhận bằng đáp ứng tiêm trong khớp.",[16,11,7],"main");
   if(v("b_lbb")==="") N("Có thể làm LBB để thăm dò nguồn đau phía sau (dây chằng cùng–chậu sau); LBB ≥ 50% thì RFA vẫn là một lựa chọn.",[7,8],"info");
  }else{
   // đã có đáp ứng tiêm trong khớp (hoặc đã tiêm)
   if(v("t_inj")==="long") N("Tiêm trong khớp giảm đau kéo dài: có thể lặp lại khi tái phát; nếu muốn kéo dài hơn, làm LBB để xét RFA (giảm đau 6–12 tháng).",[6,7,8],"main");
   else if(v("b_lbb")===""){
    N("Bước tiếp theo — phong bế nhánh ngoài (LBB) để chọn bệnh nhân cho RFA: KHÔNG an thần, KHÔNG steroid / chất phụ gia (tránh nhiễu), thuốc tê tác dụng dài; giảm đau ≥ 50% → tỷ lệ cao RFA thành công lâu dài (Cohen: 8/9).",[7,8],"main");
    N("Nếu tiêm trong khớp giảm đau ngắn hoặc không đáp ứng, LBB giúp phân biệt nguồn đau phía sau; chi phối phía trước của SIJ còn tranh luận và RFA không denervate được phía trước.",[7,8],"info");
   }else if(v("b_lbb")==="ge50"){
    if(v("t_rfa")==="")N("LBB ≥ 50% → đủ điều kiện RFA (6–12 tháng, thần kinh tái sinh nên có thể lặp lại). Yếu tố tiên lượng kém: tuổi > 65 kèm đau lan dưới gối, dùng opioid thường xuyên.",[8],"main");
    else if(v("t_rfa")==="long")N("RFA đáp ứng kéo dài: lặp lại RFA khi đau tái phát (thần kinh tái sinh sau 6–12 tháng).",[8],"main");
    else N("RFA không đáp ứng / đáp ứng ngắn dù LBB dương: xem lại kỹ thuật và nguồn đau (phía trước? nguồn khác?), rồi cân nhắc bậc kế tiếp: hàn khớp hoặc PNS (xem các bảng tiêu chí bên dưới).",[8,16,11],"main");
   }else{
    N("LBB < 50%: RFA ít có khả năng hiệu quả; xem lại nguồn đau (phía trước, nguồn khác) và cân nhắc các bậc kế tiếp nếu đã đủ tiêu chí.",[7,8],"main");
   }
   if(failTx){
    N("Hàn khớp: chỉ xét khi đủ 7 tiêu chí ISASS/NASS (bảng bên dưới), không có chống chỉ định, đã tối ưu bệnh nhân và lập kế hoạch thuốc chống đông (Ch18). MIS bên có nhiều dữ liệu nhất; đường sau ít xâm lấn hơn nhưng bằng chứng trực tiếp còn tối thiểu (Ch19, Ch20, Ch22).",[16,18,19,20],"info");
    N("Kích thích thần kinh ngoại biên (PNS): xét khi đau theo vùng một dây thần kinh, phong bế chẩn đoán dương, không bệnh tâm thần nặng, vận hành được thiết bị; PNS thuộc nhóm nguy cơ chảy máu thấp.",[11,12],"info");
   }
   N("Y học tái tạo (prolotherapy, PRP, tế bào gốc, máu toàn phần, HA): bằng chứng riêng cho SIJ rất hạn chế (PRP xếp mức IV theo ASIPP); chỉ nên trong khuôn khổ thận trọng / nghiên cứu.",[9],"info");
  }
 }
 // ----- dữ kiện còn thiếu -----
 if(R.prov.unk>0) R.missing.push("Chưa khám "+R.prov.unk+"/6 nghiệm pháp kích thích (distraction, compression, thigh thrust, sacral thrust, Gaenslen, FABER)");
 if(!v("e_sulcus")) R.missing.push("Chưa ghi nhận ấn đau rãnh cùng / điểm Fortin");
 if(v("b_ia")==="") R.missing.push("Chưa phong bế chẩn đoán trong khớp — tiêu chuẩn xác nhận chẩn đoán SIJ theo sách");
 if(["im_sac","im_deg","im_hip","im_lum","im_mass","im_fx","im_inf"].every(k=>!v(k))) R.missing.push("Chưa có hình ảnh để loại trừ nguồn khác (khớp háng, cột sống thắt lưng, u, nhiễm trùng, viêm khớp cùng–chậu)");
 if(R.ibp.unk>0&&!n("i_age50")) R.missing.push("Chưa hỏi đủ 4 dấu hiệu đau kiểu viêm (≥ 2/4 ở người < 50 tuổi = sàng lọc dương)");
 if(["r_fever","r_leg","r_milk","r_night","r_crystal","r_trauma","r_neuro"].every(k=>!v(k))) R.missing.push("Chưa sàng lọc dấu hiệu cảnh báo (sốt, u, chấn thương, gút/CPPD, thần kinh)");
 R.empty=Object.keys(S).filter(k=>S[k]).length===0;
 return R;
}

const SAMPLES=[
 {name:"Đau SIJ điển hình sau hàn thắt lưng",S:{h_site:"y",h_fortin:"y",h_aggr:"y",h_6m:"y",h_vas5:"y",x_lf:"y",i_age50:"n",i_morn:"n",i_ex:"n",i_night:"n",i_alt:"n",r_fever:"n",r_night:"n",r_trauma:"n",r_neuro:"n",e_sulcus:"y",e_dist:"y",e_comp:"y",e_thigh:"y",e_sac:"n",e_gaen:"y",e_faber:"y",e_faber_g:"n",im_hip:"n",im_lum:"n",t_cons:"y"}},
 {name:"Nam 28 tuổi, nghi viêm cột sống dính khớp",S:{h_site:"y",i_age50:"y",i_onset35:"y",i_morn:"y",i_ex:"y",i_night:"y",i_alt:"y",l_b27:"pos",im_sac:"y",l_crp:"y",r_fever:"n",r_night:"n",e_dist:"n",e_comp:"n",e_thigh:"y"}},
 {name:"Sốt, đau mông–háng cấp, nghi nhiễm trùng SIJ",S:{h_site:"y",h_groin:"y",r_fever:"y",r_leg:"y",l_crp:"y",e_dist:"y",e_comp:"y",e_faber:"y"}},
 {name:"Đau lan dưới gối, nghi nguồn cột sống",S:{h_site:"n",h_knee:"y",h_aggr:"y",x_age65:"y",e_sulcus:"n",e_dist:"n",e_comp:"n",e_thigh:"n",e_sac:"n",e_gaen:"n",e_faber:"n",im_lum:"y",im_hip:"n",r_fever:"n",r_night:"n",r_neuro:"n"}},
 {name:"Hết đáp ứng RFA, xét hàn khớp",S:{h_site:"y",h_fortin:"y",h_6m:"y",h_vas5:"y",e_sulcus:"y",e_dist:"y",e_comp:"y",e_thigh:"y",e_sac:"y",e_gaen:"n",im_deg:"y",im_hip:"n",im_lum:"n",r_fever:"n",r_night:"n",r_trauma:"n",r_neuro:"n",b_ia:"ge50",b_lbb:"ge50",t_cons:"y",t_inj:"short",t_rfa:"short",x_smoke:"y"}},
 {name:"Đã hàn nhưng còn đau",S:{h_site:"y",t_fused:"y",x_smoke:"y",x_osteo:"y",r_fever:"n",r_night:"n",r_neuro:"n"}}
];
const CHNAME={2:"Các bệnh lý",3:"Đánh giá chẩn đoán",6:"Tiêm trong khớp",7:"Phong bế nhánh ngoài",8:"Đốt sóng cao tần",9:"Y học tái tạo",11:"Chọn bệnh nhân PNS",12:"Trước mổ PNS",16:"Chọn bệnh nhân hàn",18:"Trước mổ hàn",19:"Hàn từ bên",20:"Hàn từ sau",22:"Biến chứng",23:"Hàn thất bại"};
return {GROUPS,evaluate,SAMPLES,CHNAME};
})();
