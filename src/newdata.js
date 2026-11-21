Object.assign(SRC, {
 FIN16:{lvl:"cs",t:"Finnerup NB et al. Neuropathic pain: an updated grading system for research and clinical practice (2016)",n:"Pain 2016;157(8):1599–606. Định nghĩa đau thần kinh và hệ thống phân độ possible / probable / definite (NeuPSIG). Truy cập mở. Lưu ý của tác giả: mức 'definite' không phải lúc nào cũng chứng minh quan hệ nhân quả.",doi:"10.1097/j.pain.0000000000000492"},
 WOLFE16:{lvl:"cs",t:"Wolfe F et al. 2016 Revisions to the 2010/2011 fibromyalgia diagnostic criteria",n:"Semin Arthritis Rheum 2016;46(3):319–29. Thêm tiêu chí 'đau toàn thể' để giảm phân loại nhầm đau khu vực; bản do thầy thuốc đánh giá dùng được cho chẩn đoán từng bệnh nhân, bản tự báo cáo chỉ dùng cho nghiên cứu.",doi:"10.1016/j.semarthrit.2016.08.012"},
 ICHD3:{lvl:"gl",t:"Headache Classification Committee of the IHS. ICHD-3 (2018)",n:"Cephalalgia 2018;38(1):1–211. Tiêu chuẩn chẩn đoán đau đầu; bản tra cứu trực tuyến miễn phí tại ichd-3.org.",doi:"10.1177/0333102417738202"},
 ICOP:{lvl:"gl",t:"International Classification of Orofacial Pain, 1st edition (ICOP, 2020)",n:"Cephalalgia 2020;40(2):129–221. Tiêu chuẩn chẩn đoán đau vùng mặt – miệng, bao gồm đau dây V và đau mặt dai dẳng.",doi:"10.1177/0333102419893823"},
 BENN19:{lvl:"cs",t:"Bennett MI et al. The IASP classification of chronic pain for ICD-11: chronic cancer-related pain (2019)",n:"Pain 2019;160(1):38–44. Phân biệt đau do ung thư, đau sau điều trị ung thư và đau do bệnh kèm.",doi:"10.1097/j.pain.0000000000001363"}
});

const PHASES = [
 {n:"Giai đoạn 1 · Chẩn đoán",w:"Tuần 1–8",p:"Phân loại cơ chế và ICD-11, hỏi bệnh, khám, thang đo, red flags, rồi chẩn đoán từng nhóm hội chứng. Mục tiêu: viết được chẩn đoán đầy đủ gồm vị trí, cơ chế, mã ICD-11 và yếu tố duy trì cho mọi bệnh nhân đau mạn.",from:1,to:8},
 {n:"Giai đoạn 2 · Điều trị nội khoa",w:"Tuần 9–13",p:"Thuốc không opioid, thuốc cho đau thần kinh, opioid và đau ung thư, thuốc khác, điều trị không dùng thuốc.",from:9,to:13},
 {n:"Giai đoạn 3 · Can thiệp giảm đau",w:"Tuần 14–22",p:"An toàn, hình ảnh học, facet, RF, tiêm ngoài màng cứng, khớp, giao cảm, điều biến thần kinh.",from:14,to:22},
 {n:"Giai đoạn 4 · Thực hành tại Việt Nam",w:"Tuần 23–26",p:"Quy trình phòng khám đau, ca lâm sàng tích hợp, tổng ôn và kế hoạch đào tạo tiếp.",from:23,to:26}
];

const DIAG = [
["Khung phân loại: ICD-11 và cơ chế đau","Phân loại được mọi bệnh nhân đau mạn theo ICD-11 và theo ba mô tả cơ chế.",[
 ["ICD-11: bảy nhóm đau mạn","Đọc Treede 2019. Vẽ sơ đồ: 1 nhóm nguyên phát, 6 nhóm thứ phát; mã mở rộng về mức độ nặng.",["ICD11"]],
 ["Đau mạn nguyên phát","Tiêu chuẩn: đau trên 3 tháng kèm rối loạn cảm xúc hoặc giảm chức năng đáng kể, không giải thích tốt hơn bằng bệnh khác; 5 nhóm con.",["ICD11","NICE"]],
 ["Ba mô tả cơ chế","Cảm thụ (nociceptive), thần kinh (neuropathic), nociplastic: định nghĩa và dấu hiệu gợi ý từng loại.",["FIN16","KOSEK"]],
 ["Phân độ đau thần kinh","Finnerup 2016: possible, probable, definite. Vai trò và giới hạn của bộ câu hỏi sàng lọc.",["FIN16"]],
 ["Đau hỗn hợp và chẩn đoán thay đổi","Nguyên phát và thứ phát cùng tồn tại; đánh giá lại khi bệnh cảnh thay đổi (NICE 1.1).",["NICE","FITZ"]],
 ["Thực hành phân loại","Phân loại 5 bệnh nhân gần đây theo cả ICD-11 và cơ chế.",[]]]],
["Hỏi bệnh và khám lâm sàng","Khám có cấu trúc để định vị nguồn đau và tìm dấu hiệu cảm giác.",[
 ["Bệnh sử đau có cấu trúc","Khởi phát, sơ đồ đau, tính chất, diễn tiến, yếu tố tăng giảm, giấc ngủ, khí sắc, ảnh hưởng chức năng.",["BENZON"]],
 ["Thuốc đã dùng và cờ vàng","Đáp ứng với thuốc trước đây; niềm tin sợ vận động, catastrophizing, vấn đề công việc.",["BENZON","LBP"]],
 ["Khám thần kinh","Vận động, phản xạ; phân biệt phân bố khoanh da, rễ và dây thần kinh ngoại biên.",["BENZON"]],
 ["Khám cảm giác tại giường","Chạm, kim, nóng–lạnh, rung; tìm allodynia, hyperalgesia, cộng gộp theo thời gian; so sánh hai bên.",["FIN16","BENZON"]],
 ["Nghiệm pháp cơ xương khớp","Nâng chân thẳng, Spurling, FABER, các nghiệm pháp khớp cùng chậu; độ nhạy và độ đặc hiệu thật sự của chúng.",["BENZON"]],
 ["Soạn phiếu khám","Phiếu khám đau 1 trang dùng được tại khoa.",[]]]],
["Thang đo, sàng lọc và cận lâm sàng","Chọn đúng công cụ và biết giới hạn của từng công cụ.",[
 ["Cường độ và chức năng","NRS, BPI, ODI, NDI; mức thay đổi có ý nghĩa lâm sàng.",["BENZON"]],
 ["Sàng lọc đau thần kinh","DN4, LANSS, painDETECT: dùng để sàng lọc, không thay thế khám và phân độ.",["FIN16"]],
 ["Sàng lọc tâm lý – xã hội","PHQ-9, GAD-7, Pain Catastrophizing Scale, STarT Back.",["BENZON"]],
 ["Red flags và chỉ định hình ảnh","Dấu hiệu gợi ý bệnh nặng; khi nào cần MRI; nguy cơ chụp không cần thiết.",["LBP"]],
 ["Điện cơ, QST, sinh thiết da","Các xét nghiệm giúp đạt mức 'definite' trong đau thần kinh và khi nào thật sự cần.",["FIN16"]],
 ["Bộ thang tiếng Việt","Rà soát thang nào đã có bản tiếng Việt được thẩm định; chọn bộ tối thiểu cho phòng khám.",[]]]],
["Chẩn đoán đau cột sống","Phân biệt đau trục, đau rễ và nguồn đau để chọn hướng điều trị.",[
 ["Phân loại đau thắt lưng","Lancet 2018: không đặc hiệu, đau rễ, bệnh lý nặng.",["LBP"]],
 ["Đau trục và đau rễ","Phân biệt đau rễ với bệnh lý rễ; giá trị hạn chế của MRI khi không tương hợp lâm sàng.",["BENZON","LBP"]],
 ["Đau khớp mặt sau thắt lưng","Lâm sàng không đặc hiệu; chẩn đoán dựa vào block nhánh trong (Cohen 2020).",["LFACET"]],
 ["Khớp cùng chậu và đĩa đệm","Cụm nghiệm pháp khớp cùng chậu; đau do đĩa đệm và tranh cãi về chụp đĩa đệm.",["BENZON","SIS"]],
 ["Đau cổ và đau đầu do cổ","Hurley 2022: chẩn đoán đau khớp mặt sau cổ, khớp đội–trục.",["CFACET"]],
 ["Lưu đồ chẩn đoán cột sống","Vẽ lưu đồ từ khám đến block chẩn đoán.",[]]]],
["Chẩn đoán đau thần kinh và CRPS","Áp dụng phân độ đau thần kinh và tiêu chuẩn Budapest.",[
 ["Áp dụng phân độ đau thần kinh","Luyện phân độ trên 5 tình huống; vùng phân bố hợp lý về giải phẫu.",["FIN16"]],
 ["Đau sau zona và đau đa dây thần kinh","Đặc điểm phân bố, dấu hiệu cảm giác, xét nghiệm xác nhận.",["FIN16","BENZON"]],
 ["Đau thần kinh trung ương","Sau đột quỵ, tổn thương tủy, xơ cứng rải rác.",["BENZON","ICD11"]],
 ["Đau mạn sau phẫu thuật và chấn thương","Định nghĩa ICD-11; khi nào là đau thần kinh; liên hệ thực hành GMHS.",["ICD11","BENZON"]],
 ["CRPS","Tiêu chuẩn Budapest và điều chỉnh Valencia: triệu chứng, dấu hiệu, CRPS-NOS.",["CRPS"]],
 ["Ca CRPS","Áp dụng tiêu chuẩn cho ca CRPS chi trên sau gãy xương.",[]]]],
["Nociplastic, đau cơ xơ hóa, đau đầu và đau mặt","Nhận diện các hội chứng mà điều trị can thiệp ít vai trò.",[
 ["Áp dụng tiêu chuẩn nociplastic","Lưu đồ Kosek 2021 trên ca đau thắt lưng mạn lan rộng.",["KOSEK"]],
 ["Đau cơ xơ hóa","Tiêu chuẩn ACR 2016 (WPI, SSS, đau toàn thể); không loại trừ bệnh khác.",["WOLFE16","FITZ"]],
 ["Đau đầu nguyên phát","ICHD-3: migraine mạn, đau đầu căng thẳng mạn, đau đầu do dùng thuốc quá mức.",["ICHD3"]],
 ["Đau đầu do cổ và đau dây chẩm","Tiêu chuẩn ICHD-3; vai trò block chẩn đoán.",["ICHD3","CFACET"]],
 ["Đau vùng mặt","ICOP: đau dây V kinh điển và thứ phát, đau mặt dai dẳng.",["ICOP"]],
 ["Bảng phân biệt","Bảng: hội chứng, tiêu chuẩn chẩn đoán, có hay không chỗ cho can thiệp.",[]]]],
["Đau ung thư, sau phẫu thuật, nội tạng và vùng chậu","Chẩn đoán cơ chế trong các bối cảnh đặc biệt.",[
 ["Đau mạn liên quan ung thư","Bennett 2019: đau do ung thư, đau sau điều trị ung thư, đau do bệnh kèm.",["BENN19"]],
 ["Đánh giá đau ung thư","Cơ chế, đau đột xuất, đau xương, đau thần kinh do khối u.",["WHO","ESMO"]],
 ["Đau sau điều trị ung thư","Đau thần kinh do hóa trị, đau sau mổ vú, đau sau xạ trị.",["BENN19","FIN16"]],
 ["Đau mạn sau phẫu thuật","Yếu tố nguy cơ, cách nhận diện sớm tại phòng hồi tỉnh và khoa ngoại.",["ICD11","BENZON"]],
 ["Đau nội tạng và vùng chậu","Đau quy chiếu, đau nội tạng nguyên phát và thứ phát.",["ICD11","BENZON"]],
 ["Ca ung thư tụy","Phân tích cơ chế đau và hướng điều trị cho ca ung thư tụy.",[]]]],
["Tổng hợp chẩn đoán","Viết chẩn đoán đầy đủ cho bệnh nhân đau mạn và tự kiểm tra giai đoạn 1.",[
 ["Mô hình sinh học – tâm lý – xã hội","Đưa yếu tố duy trì vào chẩn đoán.",["BENZON","NICE"]],
 ["Công thức chẩn đoán đầy đủ","Vị trí, cơ chế, mã ICD-11, mức độ nặng, yếu tố duy trì, mục tiêu chức năng.",["ICD11"]],
 ["Tự đánh giá theo khung IASP","Đánh dấu năng lực chẩn đoán đã có và chưa có.",["IASPCUR"]],
 ["Ca tích hợp 1","Đau thắt lưng mạn có thành phần rễ và nociplastic.",["LBP","KOSEK"]],
 ["Ca tích hợp 2","Đau sau mổ vú kéo dài 6 tháng.",["BENN19","FIN16"]],
 ["Kiểm tra giai đoạn 1","Làm lại toàn bộ bài kiểm tra tuần 1–7.",[]]]]
];
// Giai đoạn 2–4 giữ nội dung cũ; tuần 6 và 7 cũ thay buổi thực hành bằng điều trị CRPS và đau ung thư
const _old = W.slice();
_old[5][2][5] = ["Điều trị CRPS","Phục hồi chức năng, thuốc, block giao cảm, SCS; bằng chứng còn hạn chế.",["CRPS","BENZON"]];
_old[6][2][5] = ["Đau ung thư: chuẩn độ opioid","Morphine uống, liều cứu hộ, đổi đường dùng theo WHO và ESMO.",["WHO","ESMO"]];
W.length = 0;
DIAG.concat(_old.slice(4,9), _old.slice(13)).forEach(x => W.push(x));
const PHYSIO = _old[0];
