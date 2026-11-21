// ===== Thay sách trả phí bằng tài liệu miễn phí hợp pháp =====
Object.assign(SRC, {
 STATP:{lvl:"tb",t:"StatPearls (NCBI Bookshelf) — sách giáo khoa y khoa trực tuyến miễn phí",n:"Hàng nghìn chương ngắn, cập nhật thường xuyên, có tác giả và tài liệu tham khảo. Dùng thay các chương sách Benzon và atlas Narouze. Độ sâu thấp hơn sách chuyên khoa, nên đọc kèm guideline gốc.",url:"https://www.ncbi.nlm.nih.gov/books/NBK430685/"},
 IASPGUIDE:{lvl:"tb",t:"IASP. Guide to Pain Management in Low-Resource Settings (2010, sách điện tử miễn phí)",n:"Sách giáo khoa đau toàn diện của IASP viết cho nước có nguồn lực hạn chế: cơ chế, đánh giá, thuốc, các hội chứng, tổ chức dịch vụ. Tải PDF trực tiếp. Một số nội dung về thuốc đã cũ, cần đối chiếu guideline mới.",url:"https://iaspfiles.s3.amazonaws.com/production/public/2021/IASP-Guide_to_Pain_Management_in_Low-Resource_Settings-English.pdf"},
 WFSA:{lvl:"tb",t:"WFSA — Anaesthesia Tutorial of the Week (ATOTW)",n:"Bài hướng dẫn miễn phí của Liên đoàn các Hội Gây mê Thế giới, có nhiều bài về đau mạn và block, kèm câu hỏi tự kiểm tra.",url:"https://resources.wfsahq.org/"},
 R4L:{lvl:"tb",t:"Research4Life / Hinari — truy cập tạp chí và sách điện tử cho nước thu nhập thấp – trung bình",n:"Việt Nam thuộc nhóm B (phí thấp). Cá nhân không đăng ký trực tiếp được; bệnh viện hoặc trường đại học đăng ký thì nhân viên dùng được. Hỏi thư viện hoặc phòng Chỉ đạo tuyến của bệnh viện.",url:"https://research4life.org/access/eligibility/"}
});
SRC.BENZON.n = "Không bắt buộc. Các buổi trong lộ trình đã thay bằng chương StatPearls miễn phí; nếu có sách thì đọc chương tương ứng để hiểu sâu hơn. Có thể tiếp cận hợp pháp qua thư viện trường y, ClinicalKey nếu bệnh viện có đăng ký, hoặc Research4Life.";
SRC.NAROUZE.n = "Không bắt buộc. Các buổi đã thay bằng StatPearls, NYSORA và WFSA miễn phí; atlas giúp xem hình siêu âm đẹp và hệ thống hơn nếu mượn được.";

// "SP:từ khóa tìm|tên hiển thị" → link tìm trên NCBI Bookshelf (StatPearls)
const FREE = {
 "2-0":"SP:pain assessment history|Pain Assessment",
 "2-2":"SP:neurological examination|Neurologic Exam",
 "2-4":"SP:straight leg raise test|Straight Leg Raise Test; tìm thêm Spurling, FABER",
 "3-0":"SP:pain scales numeric rating|Pain Scales / Pain Assessment",
 "3-2":"SP:PHQ-9 depression screening|Depression screening; đọc thêm Pain Catastrophizing",
 "3-4":"SP:nerve conduction studies electromyography|Nerve Conduction Studies, EMG",
 "4-1":"SP:lumbar radiculopathy|Lumbar Radiculopathy",
 "4-3":"SP:sacroiliac joint dysfunction|Sacroiliac Joint Dysfunction",
 "5-1":"SP:postherpetic neuralgia|Postherpetic Neuralgia; Diabetic Neuropathy",
 "5-2":"SP:central pain syndrome|Central Pain Syndrome",
 "5-3":"SP:chronic postsurgical pain|Chronic Postsurgical Pain",
 "5-5":"SP:complex regional pain syndrome|Complex Regional Pain Syndrome",
 "6-2":"SP:myofascial pain syndrome|Myofascial Pain; Osteoarthritis",
 "6-5":"SP:cervicogenic headache|Cervicogenic Headache; Trigeminal Neuralgia",
 "7-2":"SP:chemotherapy induced peripheral neuropathy|Chemotherapy-Induced Peripheral Neuropathy",
 "7-3":"SP:acute pain management|Acute Pain Management",
 "7-4":"SP:chronic pelvic pain|Chronic Pelvic Pain; Visceral Pain",
 "8-0":"SP:biopsychosocial model chronic pain|Biopsychosocial model; IASP Guide chương 1",
 "9-1":"SP:physiology nociceptors|Physiology, Nociceptors",
 "9-2":"SP:dorsal horn spinal cord pain|Neuroanatomy, Dorsal Horn / Spinothalamic Tract",
 "9-3":"SP:spinothalamic tract|Neuroanatomy, Spinothalamic Tract",
 "9-4":"SP:gate control theory pain|Physiology, Pain (phần gate control)",
 "10-0":"SP:physiology pain|Physiology, Pain",
 "10-1":"SP:central sensitization|Central Sensitization",
 "10-2":"SP:neuropathic pain|Neuropathic Pain",
 "10-3":"SP:descending pain modulation|Physiology, Pain (phần điều biến đi xuống)",
 "10-4":"SP:opioid tolerance|Opioid Tolerance; Opioid Use Disorder",
 "11-1":"SP:acetaminophen|Acetaminophen",
 "11-2":"SP:nonsteroidal anti-inflammatory drugs|NSAIDs",
 "12-1":"SP:amitriptyline|Amitriptyline; Tricyclic Antidepressants",
 "12-2":"SP:duloxetine|Duloxetine",
 "12-3":"SP:gabapentin pregabalin|Gabapentin; Pregabalin",
 "12-4":"SP:serotonin syndrome|Serotonin Syndrome",
 "13-0":"SP:opioid pharmacology|Opioid Pharmacology",
 "13-1":"SP:methadone|Morphine; Oxycodone; Fentanyl; Tramadol; Methadone",
 "13-3":"SP:opioid induced constipation|Opioid-Induced Constipation; Opioid Toxicity",
 "13-4":"SP:opioid induced hyperalgesia|Opioid-Induced Hyperalgesia",
 "14-3":"SP:opioid use disorder|Opioid Use Disorder; Buprenorphine",
 "15-0":"SP:ketamine chronic pain|Ketamine; Lidocaine",
 "15-1":"SP:corticosteroids|Corticosteroids; Epidural Steroid Injections",
 "16-0":"SP:cognitive behavioral therapy|Cognitive Behavioral Therapy",
 "16-1":"SP:exercise therapy chronic low back pain|Exercise therapy",
 "16-2":"SP:transcutaneous electrical nerve stimulation|TENS",
 "16-3":"SP:acupuncture|Acupuncture",
 "16-4":"SP:pain neuroscience education|Patient education; IASP Guide chương tự quản lý",
 "16-5":"SP:insomnia|Insomnia; Depression",
 "17-1":"SP:lumbar radiculopathy|Lumbar Radiculopathy (phần điều trị)",
 "17-2":"SP:neck pain|Neck Pain; Cervical Radiculopathy",
 "17-3":"SP:osteoarthritis|Osteoarthritis",
 "17-4":"SP:fibromyalgia|Fibromyalgia",
 "18-2":"SP:complex regional pain syndrome|Complex Regional Pain Syndrome (phần điều trị)",
 "18-3":"SP:chronic migraine|Chronic Migraine; Medication Overuse Headache",
 "18-4":"SP:trigeminal neuralgia|Trigeminal Neuralgia",
 "18-5":"SP:chronic pelvic pain|Chronic Pelvic Pain; Chronic Pancreatitis",
 "20-0":"SP:pain management elderly|Pain management in older adults",
 "20-1":"SP:pediatric chronic pain|Pediatric chronic pain",
 "20-2":"SP:analgesics pregnancy lactation|Analgesia in pregnancy and lactation",
 "20-3":"SP:opioids renal failure|Opioids in renal and hepatic impairment",
 "20-4":"SP:acute pain service|Acute Pain Management",
 "22-2":"SP:radiation safety fluoroscopy|Radiation Safety; Contrast Media Reactions",
 "22-3":"SP:epidural abscess|Spinal Epidural Abscess",
 "22-4":"SP:local anesthetic systemic toxicity|Local Anesthetic Systemic Toxicity",
 "29-0":"SP:nerve block chronic pain|Nerve blocks; NYSORA và WFSA ATOTW",
 "29-1":"SP:occipital nerve block|Occipital Nerve Block; Occipital Neuralgia",
 "29-2":"SP:trigeminal nerve block|Trigeminal nerve blocks",
 "29-3":"SP:ilioinguinal nerve block|Ilioinguinal/Iliohypogastric Block; TAP Block",
 "29-4":"SP:genicular nerve block|Suprascapular & Genicular Nerve Block",
 "29-5":"SP:peripheral nerve ultrasound|Peripheral nerve ultrasound",
 "31-1":"SP:celiac plexus block|Celiac Plexus Block",
 "31-2":"SP:ganglion impar block|Ganglion Impar Block; Superior Hypogastric Block",
 "31-3":"SP:intrathecal drug delivery|Intrathecal Drug Delivery",
 "33-0":"SP:intradiscal procedures|Intradiscal procedures; Discogenic Pain",
 "33-1":"SP:joint injection|Joint Injection; Trigger Point Injection",
 "35-0":"SP:multidisciplinary pain management|Multidisciplinary pain management",
 "35-1":"IASP Guide to Pain Management in Low-Resource Settings: chương tổ chức dịch vụ (PDF miễn phí, nguồn IASPGUIDE).",
 "35-2":"SP:quality improvement healthcare|Quality Improvement"
};
W.forEach((w,i)=>w[2].forEach((d,j)=>{
  const k=(i+1)+"-"+j; if(FREE[k]) d[3]=FREE[k];
  if(FREE[k]&&FREE[k].startsWith("SP:")){ d[2]=d[2].filter(x=>x!=="BENZON"&&x!=="NAROUZE"); if(!d[2].includes("STATP")) d[2].push("STATP"); }
  if(FREE[k]&&FREE[k].includes("IASPGUIDE")){ d[2]=d[2].filter(x=>x!=="IASPBOOK"); d[2].push("IASPGUIDE"); }
}));
// Tuần cũ (23–28, 30, 32) chỉ có mã nguồn: thêm StatPearls theo tên buổi
W.forEach((w,i)=>w[2].forEach((d,j)=>{
  if(d[3]==="Đọc phần tương ứng trong các nguồn được gắn mã."){
    const nonfree=d[2].filter(x=>x==="BENZON"||x==="NAROUZE"||x==="SIS");
    if(nonfree.length){ d[2]=d[2].filter(x=>!nonfree.includes(x)).concat(["STATP"]); d[3]="SP:"+d[0]+"|tìm chương StatPearls theo tên buổi"; }
    else d[3]="Đọc phần tương ứng trong các nguồn được gắn mã (đều miễn phí).";
  }
}));
// Tài liệu gốc bắt buộc
const MUST = /^(Treede|Finnerup|Kosek|Goebel|Wolfe|Bennett|Foster|Cohen|Hurley|NeuPSIG|CDC|WHO 2018|Narouze 2018|Rathmell|ICHD-3|ICOP|Raja)/;
function readHTML(r){
  if(!r||r==="—") return "";
  if(r.startsWith("SP:")){const [q,l]=r.slice(3).split("|");
    return `<span class="small" style="display:block;margin-top:4px"><span class="tag" style="background:var(--bg);color:var(--muted);border:1px solid var(--line)">Nên đọc</span> <b>StatPearls (miễn phí):</b> <a href="https://www.ncbi.nlm.nih.gov/books/?term=${encodeURIComponent(q+" StatPearls")}" target="_blank" rel="noopener">${esc(l)}</a></span>`;}
  const must=MUST.test(r);
  return `<span class="small" style="display:block;margin-top:4px">${must?'<span class="tag rev">Bắt buộc</span>':'<span class="tag" style="background:var(--bg);color:var(--muted);border:1px solid var(--line)">Nên đọc</span>'} <b>Đọc gốc:</b> ${esc(r)}</span>`;
}
