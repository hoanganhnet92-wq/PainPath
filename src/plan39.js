// ===== Lộ trình 39 tuần (90 phút/ngày) bám curriculum EFIC EDPM =====
Object.assign(SRC, {
 EDPM:{lvl:"gl",t:"EFIC Pain Curriculum for the European Diploma in Pain Medicine (EDPM), 2nd ed. 9/2023",n:"Khung chương trình của lộ trình này. 5 phần: nền tảng; vai trò người thầy thuốc (CanMEDS); 10 nhóm đau; quần thể đặc biệt; làm việc liên ngành. Mã [EDPM x.y] ở mỗi tuần chỉ mục tương ứng.",url:"https://europeanpainfederation.eu/wp-content/uploads/2024/02/EFIC-EDPM-Curriculum-2024.pdf"}
});
const PHASES = [
 {n:"Giai đoạn 1 · Chẩn đoán, rồi thần kinh sinh học",w:"Tuần 1–10",p:"Tuần 1–8 học liền một mạch phần chẩn đoán (EDPM 1.2–1.3, 1.6–1.7 và phần chẩn đoán của phần 3). Tuần 9–10 là thần kinh sinh học (EDPM 1.4), làm cầu nối sang phần thuốc. Mục tiêu: viết được chẩn đoán đầy đủ gồm vị trí, cơ chế, mã ICD-11 và yếu tố duy trì.",from:1,to:10},
 {n:"Giai đoạn 2 · Điều trị nội khoa và đa mô thức",w:"Tuần 11–20",p:"EDPM 1.8, 2.1, phần điều trị của phần 3 và phần 4 (người già, trẻ em, rối loạn sử dụng chất).",from:11,to:20},
 {n:"Giai đoạn 3 · Can thiệp giảm đau",w:"Tuần 21–33",p:"Trọng tâm riêng của lộ trình, vượt phạm vi EDPM: an toàn, hình ảnh, cột sống, khớp, thần kinh ngoại biên, giao cảm, đau ung thư, điều biến thần kinh.",from:21,to:33},
 {n:"Giai đoạn 4 · Thực hành chuyên nghiệp tại Việt Nam",w:"Tuần 34–39",p:"EDPM phần 2 (chuyên nghiệp, giao tiếp, quản lý, học suốt đời) và phần 5 (liên ngành); ca tích hợp, tổng ôn.",from:34,to:39}
];
const EDPMTAG = ["1.2–1.3","1.4","1.4","1.7","1.6–1.7","3.5","3.2 · 3.9","3.4 · 3.6 · 3.7","3.1 · 3.3 · 3.8","1.5 · 1.6",
 "1.8 · 2.1","3.2","1.8","2.1 · 4.3","1.8","1.6 · 2.1","3.4–3.6","3.2 · 3.7–3.9","3.3","3.1 · 4.1 · 4.2",
 "2.1","2.1","2.1","3.5","3.5","3.5 · 3.7","3.5","3.4","3.4 · 3.7","3.9","3.3","3.5 · 3.9","3.5",
 "2.2 · 2.4","2.5–2.7 · 5.1 · 1.9","2.1","2.1","2.3 · 1.5","—"];

// mỗi buổi: [tên, việc cần làm (bài tóm tắt / ghi chép), [mã nguồn], "đọc gốc 50 phút"]
const PLAN = [
["Khung phân loại: ICD-11 và cơ chế đau","Phân loại được mọi bệnh nhân đau mạn theo ICD-11 và theo ba mô tả cơ chế.",[
 ["ICD-11: bảy nhóm đau mạn","Bảng 7 nhóm, mã mở rộng mức độ nặng.",["ICD11","BENN19"],"Treede 2019, toàn bài (9 trang)."],
 ["Đau mạn nguyên phát","Tiêu chuẩn và 5 nhóm con.",["ICD11","NICE"],"NICE NG193 mục 1.1 và phần định nghĩa thuật ngữ."],
 ["Ba mô tả cơ chế","Cảm thụ, thần kinh, nociplastic.",["FIN16","KOSEK","FITZ"],"Fitzcharles 2021 (Lancet): phần định nghĩa và đặc điểm lâm sàng."],
 ["Phân độ đau thần kinh","Possible, probable, definite.",["FIN16"],"Finnerup 2016: lưu đồ phân độ và bảng vùng phân bố."],
 ["Đau hỗn hợp, chẩn đoán thay đổi","Chẩn đoán nhiều lớp, đánh giá lại.",["NICE","FITZ","KOSEK"],"Kosek 2021: lưu đồ tiêu chuẩn nociplastic."],
 ["Thực hành phân loại","5 ca mẫu và mẫu ghi chẩn đoán.",["ICD11","FIN16","KOSEK"],"EDPM curriculum mục 1.2–1.3: đối chiếu danh mục khái niệm đã học."]]],
["Thần kinh sinh học đau I: dẫn truyền","Mô tả được đường đi của tín hiệu đau từ thụ thể đến vỏ não.",[
 ["Định nghĩa đau IASP 2020","Định nghĩa và 6 ghi chú; đau khác nociception.",["RAJA"],"Raja 2020, toàn bài."],
 ["Thụ thể và sợi dẫn truyền","Aδ, C, các kênh TRP, Nav; đau thứ nhất và thứ hai.",["BENZON"],"Benzon: chương giải phẫu – sinh lý đau, phần ngoại biên."],
 ["Sừng sau tủy","Các lớp Rexed, neuron WDR, interneuron, chất dẫn truyền.",["BENZON"],"Benzon: chương giải phẫu – sinh lý đau, phần tủy sống."],
 ["Đường lên và não","Bó gai–đồi thị, bó gai–cận cánh tay; ma trận đau ở não.",["BENZON"],"Benzon: chương giải phẫu – sinh lý đau, phần trên tủy."],
 ["Thuyết cổng và điều biến","Thuyết cổng kiểm soát, ý nghĩa với TENS và kích thích tủy.",["BENZON"],"Benzon: phần thuyết cổng kiểm soát."],
 ["Vẽ sơ đồ dẫn truyền","Tự vẽ sơ đồ một trang và đối chiếu.",[],"Ôn lại các phần đã đọc trong tuần."]]],
["Thần kinh sinh học đau II: nhạy cảm hóa và mạn tính hóa","Giải thích được vì sao đau trở thành mạn và cơ sở của thuốc tác động trung ương.",[
 ["Nhạy cảm hóa ngoại biên","Chất viêm, NGF, TRPV1; tăng cảm đau nguyên phát.",["BENZON"],"Benzon: phần cơ chế đau viêm."],
 ["Nhạy cảm hóa trung ương","Wind-up, NMDA, LTP, tế bào thần kinh đệm.",["BENZON","KOSEK"],"Benzon: phần nhạy cảm hóa trung ương."],
 ["Cơ chế đau thần kinh","Phóng điện lạc chỗ, mất ức chế, tái cấu trúc.",["BENZON","FIN16"],"Benzon: chương cơ chế đau thần kinh."],
 ["Hệ ức chế đi xuống và CPM","PAG–RVM, noradrenaline, serotonin; điều biến đau có điều kiện.",["BENZON"],"Benzon: phần điều biến đi xuống."],
 ["Đau nội tạng; dung nạp và nghiện","Đặc điểm đau nội tạng, đau quy chiếu; cơ chế dung nạp, phụ thuộc, nghiện opioid.",["BENZON"],"Benzon: chương đau nội tạng (phần cơ chế)."],
 ["Chuyển đau cấp thành mạn; kiểm tra giai đoạn 1","Yếu tố sinh học và tâm lý; tự đánh giá EDPM phần 1.",["BENZON","ICD11","EDPM"],"EDPM curriculum mục 1.4: đánh dấu mục đã nắm và chưa nắm."]]],
["Hỏi bệnh và khám lâm sàng","Khám có cấu trúc để định vị nguồn đau và tìm dấu hiệu cảm giác.",[
 ["Bệnh sử đau có cấu trúc","Sơ đồ đau, tính chất, diễn tiến, giấc ngủ, khí sắc, chức năng.",["BENZON"],"Benzon: chương đánh giá bệnh nhân đau (phần hỏi bệnh)."],
 ["Thuốc đã dùng và cờ màu","Cờ đỏ, vàng, xanh, đen; tiền sử thuốc và chất.",["BENZON","LBP"],"EDPM curriculum mục 1.7: danh mục cờ màu và yếu tố ảnh hưởng."],
 ["Khám thần kinh","Vận động, phản xạ; khoanh da, rễ, dây ngoại biên.",["BENZON"],"Benzon: chương đánh giá bệnh nhân đau (phần khám thần kinh)."],
 ["Khám cảm giác tại giường","Chạm, kim, nóng–lạnh, rung; allodynia, cộng gộp theo thời gian.",["FIN16","BENZON"],"Finnerup 2016: phần khám cảm giác."],
 ["Nghiệm pháp cơ xương khớp","SLR, Spurling, FABER, cụm nghiệm pháp khớp cùng chậu; độ nhạy, độ đặc hiệu.",["BENZON"],"Benzon: chương khám cơ xương khớp."],
 ["Soạn phiếu khám","Phiếu khám đau 1 trang cho khoa.",[],"Đối chiếu phiếu với EDPM mục 1.7."]]],
["Thang đo, sàng lọc và cận lâm sàng","Chọn đúng công cụ và biết giới hạn của từng công cụ.",[
 ["Cường độ và chức năng","NRS, BPI, ODI, NDI; mức thay đổi có ý nghĩa.",["BENZON"],"Benzon: phần đo lường đau."],
 ["Sàng lọc đau thần kinh","DN4, LANSS, painDETECT.",["FIN16"],"Finnerup 2016: phần công cụ sàng lọc."],
 ["Sàng lọc tâm lý – xã hội","PHQ-9, GAD-7, PCS, STarT Back.",["BENZON"],"Benzon: chương đánh giá tâm lý bệnh nhân đau."],
 ["Red flags và hình ảnh","Khi nào chụp MRI; nguy cơ chụp không cần thiết.",["LBP"],"Foster 2018 (Lancet): phần chẩn đoán hình ảnh."],
 ["Điện cơ, QST, sinh thiết da","Xét nghiệm giúp đạt mức 'definite'.",["FIN16"],"Benzon: chương thăm dò điện sinh lý."],
 ["Bộ thang tiếng Việt","Rà soát thang đã thẩm định tiếng Việt; chọn bộ tối thiểu.",[],"Tìm trên PubMed và tạp chí trong nước các nghiên cứu thẩm định bản tiếng Việt."]]],
["Chẩn đoán đau cổ và lưng","Phân biệt đau trục, đau rễ và nguồn đau.",[
 ["Phân loại đau thắt lưng","Không đặc hiệu, đau rễ, bệnh lý nặng.",["LBP"],"Foster 2018: toàn bài."],
 ["Đau trục và đau rễ","Đau rễ khác bệnh lý rễ; MRI không tương hợp.",["BENZON","LBP"],"Benzon: chương đau thắt lưng (phần chẩn đoán)."],
 ["Khớp mặt sau thắt lưng","Lâm sàng không đặc hiệu; vai trò block nhánh trong.",["LFACET"],"Cohen 2020: câu hỏi 1–4 (chọn bệnh nhân, hình ảnh)."],
 ["Khớp cùng chậu và đĩa đệm","Cụm nghiệm pháp; tranh cãi chụp đĩa đệm.",["BENZON","SIS"],"Benzon: chương đau khớp cùng chậu."],
 ["Đau cổ và đau đầu do cổ","Khớp mặt sau cổ, khớp đội–trục.",["CFACET"],"Hurley 2022: phần chẩn đoán."],
 ["Lưu đồ chẩn đoán cột sống","Từ khám đến block chẩn đoán.",[],"Bộ Y tế QĐ 361: bài đau thắt lưng, thần kinh tọa; ghi chỗ khác guideline mới."]]],
["Chẩn đoán đau thần kinh và CRPS","Áp dụng phân độ đau thần kinh và tiêu chuẩn Budapest.",[
 ["Áp dụng phân độ","5 tình huống luyện tập.",["FIN16"],"Finnerup 2016: đọc lại bảng ví dụ."],
 ["Đau sau zona và đa dây thần kinh","Phân bố, dấu hiệu, xét nghiệm.",["FIN16","BENZON"],"Benzon: chương đau thần kinh ngoại biên."],
 ["Đau thần kinh trung ương","Sau đột quỵ, tổn thương tủy, xơ cứng rải rác.",["BENZON","ICD11"],"Benzon: chương đau thần kinh trung ương."],
 ["Đau sau phẫu thuật và chấn thương","Định nghĩa ICD-11, thành phần thần kinh.",["ICD11","BENZON"],"Benzon: chương đau mạn sau phẫu thuật."],
 ["CRPS","Budapest và Valencia; CRPS-NOS.",["CRPS"],"Goebel 2021: toàn bài (3 trang)."],
 ["Ca CRPS","Áp dụng tiêu chuẩn cho ca sau gãy xương.",[],"Benzon: chương CRPS (phần chẩn đoán)."]]],
["Chẩn đoán đau cơ xương khớp, đau cơ xơ hóa, đau đầu và mặt","Nhận diện các hội chứng mà can thiệp ít vai trò.",[
 ["Áp dụng tiêu chuẩn nociplastic","Lưu đồ Kosek trên ca đau lan rộng.",["KOSEK"],"Kosek 2021: đọc lại phần áp dụng."],
 ["Đau cơ xơ hóa","Tiêu chuẩn ACR 2016.",["WOLFE16","FITZ"],"Wolfe 2016: phần tiêu chuẩn và bảng WPI, SSS."],
 ["Đau cơ xương khớp","Thoái hóa khớp, viêm khớp, đau cơ – cân mạc.",["BENZON"],"Benzon: chương bệnh khớp (rheumatologic conditions)."],
 ["Đau đầu nguyên phát","Migraine mạn, đau đầu căng thẳng, đau đầu do dùng thuốc quá mức.",["ICHD3"],"ICHD-3: mục 1.3, 2.3, 8.2 (bản tra cứu trực tuyến)."],
 ["Đau đầu do cổ, đau dây chẩm, đau mặt","ICHD-3 và ICOP.",["ICHD3","ICOP"],"ICOP: phần đau dây V; ICHD-3: mục 11.2.1 và 13.4."],
 ["Bảng phân biệt","Hội chứng, tiêu chuẩn, chỗ cho can thiệp.",[],"Benzon: chương đau đầu do cổ và đau vùng mặt (lướt để kiểm tra bảng)."]]],
["Chẩn đoán đau cấp, đau ung thư, đau nội tạng","Chẩn đoán cơ chế trong các bối cảnh đặc biệt.",[
 ["Đau mạn liên quan ung thư","Đau do ung thư, sau điều trị, bệnh kèm.",["BENN19"],"Bennett 2019: toàn bài."],
 ["Đánh giá đau ung thư","Cơ chế, đau đột xuất, đau xương.",["WHO","ESMO"],"ESMO 2018: phần đánh giá."],
 ["Đau sau điều trị ung thư","Đau thần kinh do hóa trị, sau mổ vú, sau xạ trị.",["BENN19","FIN16"],"Benzon: chương đau ở người sống sót sau ung thư."],
 ["Đau cấp và nguy cơ mạn hóa","Đau cấp sau mổ, chuyển thành mạn.",["BENZON"],"Benzon: chương tổ chức dịch vụ giảm đau cấp."],
 ["Đau nội tạng và vùng chậu","Đau quy chiếu; nội tạng nguyên phát và thứ phát.",["ICD11","BENZON"],"Benzon: chương đau nội tạng và đau vùng chậu."],
 ["Ca ung thư tụy","Phân tích cơ chế đau.",[],"WHO 2018: chương nguyên tắc."]]],
["Tổng hợp chẩn đoán và đọc y văn","Viết chẩn đoán đầy đủ; đánh giá được một bài báo về đau.",[
 ["Mô hình sinh học – tâm lý – xã hội","Đưa yếu tố duy trì vào chẩn đoán.",["BENZON","NICE"],"Benzon: chương điều trị đau liên ngành."],
 ["Công thức chẩn đoán đầy đủ","Vị trí, cơ chế, ICD-11, mức độ nặng, yếu tố duy trì.",["ICD11"],"Đọc lại Treede 2019 phần mã mở rộng."],
 ["Thiết kế thử nghiệm về đau","RCT, placebo, enriched enrolment, kết cục.",["NEUP25"],"NeuPSIG 2025: phần Methods (vì sao loại thiết kế EERW)."],
 ["Đọc số liệu","NNT, NNH, mức thay đổi có ý nghĩa, GRADE.",["NEUP25"],"NeuPSIG 2025: phần Results và bảng GRADE."],
 ["Ca tích hợp","Đau thắt lưng có rễ và nociplastic; đau sau mổ vú.",["LBP","KOSEK","BENN19"],"Tự làm 2 ca, đối chiếu tài liệu đã đọc."],
 ["Kiểm tra phần chẩn đoán","Làm lại kiểm tra tuần 1–7; tự đánh giá theo EDPM mục 1.6–1.7 và phần 3.",["EDPM","IASPCUR"],"EDPM curriculum: đánh dấu mục chẩn đoán đã nắm và chưa nắm."]]],

// ---- Giai đoạn 2
["Nguyên tắc điều trị và thuốc không opioid","Lập kế hoạch đa mô thức; kê paracetamol, NSAID, thuốc bôi an toàn.",[
 ["Nguyên tắc điều trị đau mạn","Mục tiêu chức năng, ra quyết định chung.",["NICE","BENZON"],"NICE NG193: mục 1.2 (điều trị đau mạn nguyên phát)."],
 ["Paracetamol","Cơ chế, liều tối đa, bệnh gan; bằng chứng trong đau lưng.",["BENZON","LBP"],"Benzon: chương thuốc không opioid (phần paracetamol)."],
 ["NSAID và ức chế COX-2","Nguy cơ tiêu hóa, tim mạch, thận.",["BENZON"],"Benzon: chương thuốc không opioid (phần NSAID)."],
 ["Thuốc bôi","NSAID bôi, lidocaine 5%, capsaicin 8%.",["BENZON","NEUP25"],"NeuPSIG 2025: phần thuốc bôi."],
 ["Thuốc giãn cơ và hướng dẫn trong nước","Bằng chứng yếu; phụ lục thuốc của Bộ Y tế.",["BENZON","BYT361"],"Bộ Y tế QĐ 361: phụ lục thuốc giảm đau và NSAID."],
 ["Ca kê đơn","3 bệnh nhân: suy thận, loét dạ dày cũ, bệnh mạch vành.",[],"Tự kê đơn rồi đối chiếu chương NSAID."]]],
["Thuốc cho đau thần kinh","Chọn thuốc bậc 1 theo NeuPSIG 2025 và chỉnh liều.",[
 ["NeuPSIG 2025: khuyến cáo","Bậc 1, 2, 3 và khuyến cáo không dùng.",["NEUP25","NEUP15"],"NeuPSIG 2025: phần Discussion và bảng khuyến cáo."],
 ["TCA","Amitriptyline, nortriptyline: liều, ECG, người già.",["BENZON"],"Benzon: chương thuốc chống trầm cảm trong giảm đau."],
 ["SNRI","Duloxetine, venlafaxine.",["BENZON"],"Benzon: chương thuốc chống trầm cảm (phần SNRI)."],
 ["Gabapentinoid","Chỉnh theo thận, nguy cơ lạm dụng.",["BENZON","NEUP25"],"Benzon: chương thuốc chống động kinh trong giảm đau."],
 ["Tương tác thuốc","Hội chứng serotonin, QT, ức chế hô hấp.",["BENZON"],"Benzon: phần tương tác thuốc giảm đau."],
 ["Bảng tra nhanh","Thuốc, liều, chỉnh liều, tác dụng phụ.",[],"So bảng của mình với NeuPSIG 2025."]]],
["Opioid I: dược lý","Hiểu dược lý và quy đổi liều opioid.",[
 ["Thụ thể và chuyển hóa","CYP2D6 với tramadol, codeine.",["BENZON"],"Benzon: chương dược lý opioid."],
 ["Các opioid thường dùng ở VN","Morphine, oxycodone, fentanyl, tramadol, methadone.",["BENZON"],"Benzon: chương dược lý opioid (phần từng thuốc)."],
 ["Quy đổi liều và MME","Bảng quy đổi, đổi opioid, giảm liều khi đổi.",["CDC"],"CDC 2022: phần quy đổi MME."],
 ["Tác dụng phụ","Táo bón, ức chế hô hấp, suy giảm nội tiết, miễn dịch.",["BENZON"],"Benzon: phần tác dụng phụ opioid."],
 ["Tăng cảm đau do opioid","Cơ chế, phân biệt với dung nạp.",["BENZON"],"Benzon: phần OIH."],
 ["Bài tập quy đổi","5 bài tập đổi opioid.",[],"Tự làm, đối chiếu bảng CDC."]]],
["Opioid II: kê đơn an toàn và rối loạn sử dụng chất","Kê, theo dõi, giảm liều opioid; nhận diện rối loạn sử dụng chất.",[
 ["CDC 2022: khuyến cáo 1–5","Có khởi trị không, loại nào, liều nào.",["CDC"],"CDC 2022: khung khuyến cáo 1–5 và phần giải thích."],
 ["CDC 2022: khuyến cáo 6–12","Thời gian, theo dõi, đánh giá nguy cơ.",["CDC"],"CDC 2022: khuyến cáo 6–12."],
 ["Giảm liều","Phác đồ giảm chậm, không ngừng đột ngột.",["CDC"],"CDC 2022: phần tapering."],
 ["Rối loạn sử dụng opioid","Sàng lọc, buprenorphine, phối hợp chuyên khoa.",["CDC"],"Benzon: chương đau và nghiện chất."],
 ["Quy định tại Việt Nam","Kê đơn thuốc gây nghiện: tự tra văn bản hiện hành.",[],"Tra văn bản quy định kê đơn thuốc gây nghiện mới nhất của Bộ Y tế."],
 ["Ca opioid liều cao","Kế hoạch 3 tháng.",[],"Áp dụng CDC 2022 vào ca."]]],
["Thuốc khác","Biết chỗ đứng của ketamine, lidocaine, steroid, botulinum, cannabinoid.",[
 ["Ketamine và lidocaine tĩnh mạch","Chỉ định, liều, bằng chứng.",["BENZON","NICE"],"Benzon: phần truyền tĩnh mạch trong đau mạn."],
 ["Corticosteroid","Toàn thân và tại chỗ.",["BENZON"],"Benzon: chương dược lý cho bác sĩ can thiệp (phần steroid)."],
 ["Botulinum toxin","Đau thần kinh khu trú, migraine mạn.",["NEUP25"],"NeuPSIG 2025: phần BTX-A."],
 ["Cannabinoid","Bằng chứng và khuyến cáo.",["NEUP25"],"NeuPSIG 2025: phần cannabinoid."],
 ["NICE NG193: thuốc","Thuốc không nên khởi trị và phản biện.",["NICE"],"NICE NG193: mục 1.2.8–1.2.11 và phần lý do khuyến cáo."],
 ["So sánh guideline","NICE và NeuPSIG khác nhau ở đâu.",[],"Viết 1 trang so sánh."]]],
["Tâm lý, vận động và phục hồi chức năng","Thiết kế phần không dùng thuốc trong phác đồ.",[
 ["Liệu pháp tâm lý","CBT, ACT, chương trình quản lý đau.",["BENZON","NICE"],"Benzon: chương Psychological Approaches in Pain Management."],
 ["Vận động trị liệu","Liều tập, tập tăng dần.",["BENZON","NICE"],"Benzon: chương Physical Rehabilitation for Patients with Chronic Pain."],
 ["Phương thức vật lý","Nhiệt, TENS, siêu âm trị liệu; khuyến cáo NICE.",["BENZON","NICE"],"Benzon: chương Physical Medicine Modalities in Pain Management."],
 ["Liệu pháp bổ trợ","Châm cứu và các liệu pháp khác.",["BENZON","NICE"],"Benzon: chương Complementary Approaches to Pain Management."],
 ["Giáo dục và tự quản lý","Soạn tờ hướng dẫn tiếng Việt.",["BENZON"],"Benzon: chương Patient Education and Self-Management."],
 ["Giấc ngủ và khí sắc","Mối liên quan hai chiều; khi nào chuyển chuyên khoa.",["BENZON"],"Benzon: phần rối loạn giấc ngủ ở bệnh nhân đau."]]],
["Điều trị theo hội chứng I: cổ, lưng, cơ xương khớp, đau cơ xơ hóa","Phác đồ nội khoa cho các hội chứng thường gặp nhất.",[
 ["Đau thắt lưng mạn","Theo guideline: không dùng thuốc trước.",["LBP"],"Foster 2018: phần điều trị."],
 ["Đau rễ","Thuốc, chỉ định chuyển can thiệp hoặc phẫu thuật.",["BENZON"],"Benzon: chương đau thắt lưng (phần điều trị)."],
 ["Đau cổ","Điều trị nội khoa đau cổ mạn.",["BENZON"],"Benzon: chương đau cổ."],
 ["Thoái hóa khớp","Điều trị nhiều bước.",["BENZON"],"Benzon: chương bệnh khớp (phần điều trị)."],
 ["Đau cơ xơ hóa","Vận động, tâm lý, thuốc.",["FITZ","BENZON"],"Benzon: chương Chronic Widespread Pain."],
 ["Phác đồ mẫu","Phác đồ đa mô thức cho 2 ca.",[],"Đối chiếu với NICE NG193."]]],
["Điều trị theo hội chứng II: thần kinh, CRPS, đầu mặt, nội tạng","Phác đồ cho các hội chứng khó.",[
 ["Đau sau zona và đa dây thần kinh","Áp dụng NeuPSIG cho từng bệnh.",["NEUP25"],"NeuPSIG 2025: phần phân tích theo bệnh."],
 ["Đau thần kinh trung ương","Lựa chọn thuốc, rTMS.",["NEUP25","BENZON"],"NeuPSIG 2025: phần rTMS."],
 ["CRPS","Phục hồi chức năng, thuốc, block, SCS.",["CRPS","BENZON"],"Benzon: chương CRPS (phần điều trị)."],
 ["Đau đầu mạn","Dự phòng migraine mạn, đau đầu do dùng thuốc quá mức.",["ICHD3","BENZON"],"Benzon: chương Headache Management."],
 ["Đau mặt và đau dây V","Carbamazepine và lựa chọn khác.",["ICOP","BENZON"],"Benzon: chương Orofacial Pain."],
 ["Đau nội tạng và vùng chậu","Hướng tiếp cận điều trị.",["BENZON"],"Benzon: chương Visceral Pain và Pelvic Pain."]]],
["Đau ung thư và chăm sóc giảm nhẹ","Điều trị đau ung thư theo WHO/ESMO.",[
 ["WHO 2018: nguyên tắc","Mục tiêu và nguyên tắc.",["WHO"],"WHO 2018: chương 5 (nguyên tắc)."],
 ["Chuẩn độ opioid","Morphine uống, liều cứu hộ.",["WHO","ESMO"],"WHO 2018: khuyến cáo về khởi trị và duy trì."],
 ["Đau đột xuất và đổi đường dùng","Opioid tác dụng nhanh, đường dưới da.",["ESMO"],"ESMO 2018: phần đau đột xuất."],
 ["Thuốc hỗ trợ và đau xương","Steroid, bisphosphonate, xạ trị.",["WHO"],"WHO 2018: khuyến cáo về thuốc hỗ trợ và di căn xương."],
 ["Phối hợp chăm sóc giảm nhẹ","Khi nào chuyển, cách phối hợp.",["WHO"],"ESMO 2018: phần tổ chức chăm sóc."],
 ["Ca ung thư","Ca ung thư phổi di căn xương: kế hoạch đầy đủ.",[],"Áp dụng WHO và ESMO."]]],
["Quần thể đặc biệt và đau cấp","Điều chỉnh điều trị cho người già, trẻ em, thai kỳ; nối đau cấp với đau mạn.",[
 ["Người già","Dược động học, sa sút trí tuệ, đánh giá đau.",["BENZON"],"Benzon: chương Geriatric Pain Management."],
 ["Trẻ em và vị thành niên","Đánh giá và điều trị đau mạn ở trẻ.",["BENZON"],"Benzon: chương Pediatric Chronic Pain Management."],
 ["Thai kỳ và cho con bú","An toàn thuốc.",["BENZON"],"Benzon: chương Managing Pain During Pregnancy and Lactation."],
 ["Bệnh kèm phức tạp","Suy thận, suy gan, ngưng thở khi ngủ.",["BENZON"],"Benzon: chương Pain Management in Patients With Comorbidities."],
 ["Đau cấp và dịch vụ giảm đau cấp","Phòng đau mạn sau mổ.",["BENZON"],"Benzon: chương Organizing an Inpatient Acute Pain Service."],
 ["Kiểm tra giai đoạn 2","Làm lại kiểm tra tuần 11–19.",["EDPM"],"EDPM curriculum mục 1.8, phần 3–4: đánh dấu mục đã nắm."]]]
];

// ---- Giai đoạn 3: dùng lại nội dung can thiệp cũ (tuần 14–22 cũ) và bổ sung
const OLD = W.slice();
const INTV = [
 ["An toàn I: chống đông","Thuộc phân tầng nguy cơ và thời gian ngừng thuốc.",[
  ["Phân tầng nguy cơ chảy máu","Thủ thuật nguy cơ thấp, trung bình, cao.",["COAG"],"Narouze 2018: phần phân tầng và bảng thủ thuật."],
  ["Thuốc chống ngưng tập tiểu cầu","Aspirin, P2Y12, NSAID.",["COAG"],"Narouze 2018: phần thuốc chống tiểu cầu."],
  ["Heparin, LMWH, fondaparinux","Thời gian ngừng và dùng lại.",["COAG"],"Narouze 2018: phần heparin."],
  ["DOAC và kháng vitamin K","Thời gian ngừng theo chức năng thận.",["COAG"],"Narouze 2018: phần DOAC."],
  ["Thực phẩm chức năng và bệnh nhân nguy cơ cao","Phối hợp với bác sĩ tim mạch.",["COAG"],"Narouze 2018: phần thảo dược và bàn bạc liên chuyên khoa."],
  ["Bảng tra chống đông","Bảng 1 trang cho phòng can thiệp; cài ASRA Coags.",[],"Đối chiếu bảng với bản gốc."]]],
 ["An toàn II: biến chứng và cấp cứu","Phòng và xử trí biến chứng nặng.",[
  ["Biến chứng thần kinh sau tiêm NMC","20 khuyến cáo an toàn.",["ESI"],"Rathmell 2015: toàn bài."],
  ["Steroid hạt và không hạt","Cơ chế tắc mạch, lựa chọn.",["ESI"],"Rathmell 2015: phần steroid."],
  ["Chất cản quang và bức xạ","Dị ứng cản quang, ALARA.",["BENZON"],"Benzon: phần an toàn bức xạ và cản quang."],
  ["Nhiễm khuẩn","Vô khuẩn, kháng sinh dự phòng khi cấy thiết bị.",["BENZON"],"Benzon: phần biến chứng nhiễm khuẩn."],
  ["Cấp cứu","Tiêm nội mạch, LAST, tụt huyết áp, tê tủy cao.",["BENZON"],"Benzon: phần xử trí biến chứng cấp."],
  ["Checklist an toàn","Checklist trước thủ thuật.",[],"Đối chiếu với Rathmell 2015 và Narouze 2018."]]],
 OLD[14], OLD[15], OLD[16], OLD[17], OLD[18], OLD[19],
 ["Thần kinh ngoại biên dưới siêu âm","Block chẩn đoán và điều trị các dây ngoại biên thường gặp.",[
  ["Nguyên tắc block ngoại biên trong đau mạn","Block chẩn đoán, block điều trị, RF xung.",["NAROUZE"],"Narouze: chương Peripheral Nerve Blockade in Chronic Pain Management."],
  ["Dây thần kinh chẩm","GON, LON dưới siêu âm.",["NAROUZE"],"Narouze: chương Greater Occipital Nerve và Occipital Neuralgia."],
  ["Dây thần kinh vùng mặt","Block nhánh nông dây V.",["NAROUZE"],"Narouze: chương Superficial Trigeminal Nerve Blocks."],
  ["Dây vùng thân","Liên sườn, chậu bẹn, chậu hạ vị, sinh dục đùi, TAP.",["NAROUZE"],"Narouze: chương TAP và Blocks for Pelvic Pain."],
  ["Dây chi trên và chi dưới","Trên vai, gối, dây bì đùi ngoài.",["NAROUZE"],"Narouze: chương Upper và Lower Extremity Blocks."],
  ["Siêu âm thần kinh","Nhận diện u thần kinh, chèn ép.",["NAROUZE"],"Narouze: chương Ultrasonography of Peripheral Nerves."]]],
 OLD[20],
 ["Can thiệp trong đau ung thư","Chỉ định và kỹ thuật hủy thần kinh, bơm tủy sống.",[
  ["Chỉ định can thiệp","Khi nào thuốc không đủ.",["ESMO"],"ESMO 2018: phần can thiệp."],
  ["Hủy đám rối tạng","Ung thư tụy: bằng chứng và kỹ thuật.",["ESMO","NAROUZE"],"Narouze: chương Celiac Plexus Block and Neurolysis."],
  ["Hủy đám rối hạ vị và hạch impar","Đau vùng chậu do ung thư.",["NAROUZE"],"Narouze: chương Ganglion Impar Injection."],
  ["Bơm thuốc tủy sống","Chọn bệnh nhân, thuốc.",["BENZON"],"Benzon: chương Neuraxial Agents for Intraspinal Drug Delivery."],
  ["Cordotomy và kỹ thuật khác","Chỉ định hiếm.",["ESMO"],"ESMO 2018: phần cordotomy."],
  ["Ca ung thư tụy","Kế hoạch can thiệp đầy đủ.",[],"Áp dụng tài liệu đã đọc."]]],
 OLD[21],
 ["Thủ thuật đĩa đệm và tổng kết can thiệp","Biết các thủ thuật đĩa đệm và tự kiểm tra giai đoạn 3.",[
  ["Thủ thuật đĩa đệm","IDET, nucleoplasty, giải ép qua da.",["BENZON"],"Benzon: chương Intradiscal Procedures."],
  ["Tiêm khớp và mô mềm","Nguyên tắc chung, bằng chứng.",["BENZON"],"Benzon: chương Joint Injections."],
  ["Chọn kỹ thuật theo nguồn lực VN","Thủ thuật nào làm được với siêu âm, thủ thuật nào cần C-arm.",["NAROUZE"],"Rà lại các chương đã đọc."],
  ["Hồ sơ thủ thuật","Mẫu ghi chép và theo dõi kết quả.",[],"Soạn mẫu."],
  ["Ôn an toàn","Làm lại checklist chống đông và ESI.",["COAG","ESI"],"Đọc lại bảng tóm tắt."],
  ["Kiểm tra giai đoạn 3","Bài kiểm tra về chỉ định, an toàn, kỹ thuật.",[],"Tự chấm theo tài liệu gốc."]]]
];

// ---- Giai đoạn 4
const PRAC = [
 ["Chuyên nghiệp, đạo đức và giao tiếp","EDPM 2.2 và 2.4 trong bối cảnh Việt Nam.",[
  ["Đạo đức trong điều trị đau","Quyền tiếp cận giảm đau, công bằng.",["EDPM"],"EDPM curriculum mục 2.2."],
  ["Khung pháp lý tại Việt Nam","Phạm vi hành nghề, danh mục kỹ thuật, kê đơn thuốc gây nghiện.",[],"Tra văn bản hiện hành; hỏi phòng Kế hoạch tổng hợp."],
  ["Giao tiếp với bệnh nhân đau mạn","Thông báo chẩn đoán, kỳ vọng thực tế.",["EDPM","BENZON"],"EDPM curriculum mục 2.4."],
  ["Đồng thuận thủ thuật","Lợi ích, nguy cơ, phương án thay thế.",[],"Soạn mẫu cam kết."],
  ["Bệnh nhân khó","Xung đột, đòi opioid, kỳ vọng không thực tế.",["CDC"],"CDC 2022: phần giao tiếp và ra quyết định chung."],
  ["Viết phản tỉnh","Viết 1 trang về một ca khó gần đây.",[],"—"]]],
 ["Tổ chức phòng khám và làm việc liên ngành","EDPM 2.5–2.7, 5.1 và 1.9.",[
  ["Mô hình phòng khám đau","Đơn chuyên khoa và liên ngành.",["BENZON","IASPBOOK"],"Benzon: chương Interdisciplinary Pain Management."],
  ["Quy trình tiếp nhận","Luồng bệnh nhân, sàng lọc, tái khám.",["IASPBOOK"],"IASP Guide to Pain Management in Low-Resource Settings: chương tổ chức dịch vụ."],
  ["Đo lường kết quả","Bộ thang đo mỗi lần khám, theo dõi theo thời gian.",["BENZON"],"Benzon: chương Quality Improvement and Patient Safety."],
  ["Phối hợp liên chuyên khoa","Phục hồi chức năng, tâm lý, ung bướu, thần kinh.",["EDPM"],"EDPM curriculum phần 5."],
  ["Y tế số và khám từ xa","Công cụ số, bảo mật dữ liệu.",["EDPM"],"EDPM curriculum mục 1.9."],
  ["Bản thảo quy trình","Quy trình phòng khám đau 2–3 trang.",["VASP"],"Tìm hiểu hoạt động của Hội Nghiên cứu Đau VN."]]],
 OLD[23], OLD[24],
 ["Học suốt đời, giảng dạy và đọc phê bình","EDPM 2.3: duy trì và chia sẻ kiến thức.",[
  ["Đọc phê bình RCT","Đọc 1 RCT về RFA và đánh giá.",["PUBMED"],"Chọn 1 RCT gần đây trên PubMed."],
  ["Đọc phê bình tổng quan","Đọc 1 tổng quan hệ thống về đau.",["PUBMED"],"Chọn 1 tổng quan Cochrane."],
  ["Cảnh báo y văn","Thiết lập cảnh báo PubMed cho đau mạn và can thiệp.",["PUBMED"],"—"],
  ["Soạn bài giảng","Bài giảng 20 phút cho khoa về chẩn đoán đau mạn.",[],"Dùng tài liệu giai đoạn 1."],
  ["Trình bày ca","Ca trình bày trong sinh hoạt khoa.",[],"—"],
  ["Câu hỏi nghiên cứu","Một câu hỏi nghiên cứu khả thi tại khoa.",["EDPM"],"EDPM curriculum mục 1.5."]]],
 ["Tổng ôn và kế hoạch tiếp theo","Tự đánh giá cuối khóa và lập kế hoạch thực hành có giám sát.",[
  ["Tổng ôn giai đoạn 1","Làm lại thẻ khó nhất.",[],"—"],
  ["Tổng ôn giai đoạn 2","Làm lại các ca điều trị.",[],"—"],
  ["Tổng ôn giai đoạn 3","Bảng chỉ định và checklist an toàn.",["COAG","ESI"],"—"],
  ["Tự đánh giá theo EDPM","Đánh giá lại toàn bộ curriculum.",["EDPM","IASPCUR"],"EDPM curriculum: toàn bộ danh mục."],
  ["Kế hoạch thực hành","Workshop trên xác, kiến tập trung tâm đau.",["VASP"],"—"],
  ["Kế hoạch 6 tháng tiếp","Viết kế hoạch học và thực hành tiếp.",[],"—"]]]
];
W.length = 0;
PLAN.concat(INTV, PRAC).forEach(x => W.push(x));
// gắn thêm phần đọc gốc mặc định cho các buổi lấy từ lộ trình cũ chưa có
W.forEach(w => w[2].forEach(d => { if (d.length < 4) d.push("Đọc phần tương ứng trong các nguồn được gắn mã."); }));

// Chẩn đoán liền mạch tuần 1–8, thần kinh sinh học xuống tuần 9–10
(function(){const ord=[0,3,4,5,6,7,8,9,1,2];const a=W.slice(0,10),t=EDPMTAG.slice(0,10);
 ord.forEach((o,i)=>{W[i]=a[o];EDPMTAG[i]=t[o];});})();
