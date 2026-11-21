/* ===== Mục "Đau khớp cùng chậu": link video bài giảng + tóm tắt + thẻ ôn + kiểm tra theo từng chương =====
   Nguồn: Abd-Elsayed A, Sayed D (eds). Sacroiliac Joint Pain: A Comprehensive Guide to Surgical and Interventional Procedures. OUP 2022.
   Điền link YouTube vào trường yt của từng chương (để "" nếu chưa có). Thêm chương mới = thêm một phần tử vào SIJ. */
Object.assign(SRC,{SIJ:{lvl:"tb",t:"Sacroiliac Joint Pain: A Comprehensive Guide to Surgical and Interventional Procedures",n:"Abd-Elsayed A, Sayed D (eds). Oxford University Press, 2022. Các bài giảng trong mục Đau khớp cùng chậu soạn từ sách này.",doi:"10.1093/med/9780197607947.001.0001"}});

const SIJ = [
{ id:1, t:"Chương 1 · Giải phẫu khớp cùng–chậu", yt:["https://youtu.be/iveddMRsf-k","https://youtu.be/G-dcaFR42Bw","https://youtu.be/l_dq2bqY9pM"], min:7,
 pts:[
  "Khớp cùng–chậu (SIJ): khớp đa mặt phẳng ở phía sau khung chậu, truyền tải trọng từ thân mình xuống chi dưới; nhiều dây chằng, giàu mạch máu, chi phối thần kinh dày.",
  "Là chỗ tiếp khớp giữa xương cùng và xương chậu cùng bên (2 khớp). Trên: cánh xương cùng. Dưới: xương cụt, khớp cùng–cụt. Ngoài–dưới: khuyết ngồi lớn và cơ hình lê.",
  "Phân loại: có sụn + hoạt dịch (khớp động) nhưng cũng có đĩa sụn + dây chằng gian cốt (giống bán động) → không xếp hẳn loại nào. Sụn trong ở xương cùng, sụn sợi ở xương chậu.",
  "Mặt khớp hình tai: trước nhẵn, sau thô ráp (dây chằng bám). Trẻ: phẳng; sau 30 tuổi: gồ ghề, nhiều mặt, cài vào nhau.",
  "Phôi thai: nhận ra khớp lúc 2 tháng thai kỳ, khớp hình thành đầy đủ tháng thứ 8; xương cùng 5 đốt hợp nhất ~15 tuổi.",
  "Dây chằng sau: gian cốt cùng–chậu (ISL), cùng–chậu sau (PSL), cùng–gai ngồi (SSL), cùng–ụ ngồi (STL). Dây chằng thắt lưng–chậu (ILL): L5 → mào chậu, 1–4 bó.",
  "Dây chằng trước: cùng–chậu trước (ASL) là bao xơ chắc. Nội tại: ASL, ISL, PSL, cùng–chậu sau dài. Ngoại lai: thắt lưng–chậu, cùng–ụ ngồi, cùng–gai ngồi.",
  "Cơ gần khớp: dựng sống, đa phân, gân kheo (trừ bán gân), mông lớn; cơ hình lê bám trực tiếp nhất. Ý nghĩa lâm sàng chưa rõ.",
  "Thần kinh: nhánh sau L5 và S1–S3 nhất quán nhất; đôi khi S4, hạch rễ sau L1–S2, thần kinh mông trên, thần kinh bịt. Có cả sợi Aδ và C.",
  "Mạch: trước – ĐM thắt lưng–chậu; sau – ĐM mông trên, ĐM cùng bên, ĐM cùng giữa. Tĩnh mạch: đám rối TM cùng, thông đám rối Batson, TM chậu trong.",
  "Vận động: nutation quanh trục ngang qua lỗ S2 (ưỡn thắt lưng), counternutation ngược lại; biên độ rất nhỏ, khoảng 3–6 mm.",
  "Biến thể: CT 534 bệnh nhân, 6 loại; khớp phụ nhiều nhất (19,1%), gặp nhiều hơn ở người béo phì, lớn tuổi, nam."
 ],
 cards:[
  ["SIJ là khớp giữa những xương nào?","Giữa xương cùng và xương chậu cùng bên (hai khớp, nằm ở phần sau khung chậu).","SIJ"],
  ["Vai trò cơ học chính của SIJ?","Truyền tải trọng từ thân mình xuống khung chậu và chi dưới, giúp tư thế đứng thẳng vững.","SIJ"],
  ["Vì sao SIJ không xếp hẳn là khớp động hay bán động?","Có sụn + hoạt dịch (khớp động) nhưng có dây chằng gian cốt phía sau, và trong khớp có 2 loại sụn khác nhau nên cũng không phải khớp sợi hay khớp bán động điển hình.","SIJ"],
  ["Hai loại sụn trong SIJ?","Sụn trong (hyaline) ở bên xương cùng; sụn sợi (fibrocartilage) ở bên xương chậu.","SIJ"],
  ["Mặt khớp SIJ trước và sau khác nhau thế nào?","Mặt trước nhẵn; mặt sau thô ráp với nhiều củ lồi để dây chằng bám.","SIJ"],
  ["Bề mặt SIJ thay đổi thế nào theo tuổi?","Phẳng ở người trẻ; sau tuổi 30 trở nên gồ ghề, đa mặt, cài vào nhau nhiều hơn.","SIJ"],
  ["Mốc phôi thai của SIJ?","Nhận ra khớp lúc 2 tháng thai kỳ; khớp hình thành đầy đủ ở tháng thứ 8; xương cùng 5 đốt hợp nhất khoảng 15 tuổi.","SIJ"],
  ["Kể các dây chằng phía sau của SIJ.","Gian cốt cùng–chậu (ISL), cùng–chậu sau (PSL), cùng–gai ngồi (SSL), cùng–ụ ngồi (STL), thắt lưng–chậu (ILL).","SIJ"],
  ["Dây chằng thắt lưng–chậu (ILL) đi từ đâu đến đâu?","Từ mỏm ngang L5 (hoặc L4) đến mào chậu; biến thiên, có thể 1–4 bó.","SIJ"],
  ["Dây chằng nào là bao xơ chắc ở mặt trước SIJ?","Dây chằng cùng–chậu trước (ASL).","SIJ"],
  ["Dây chằng nội tại vs ngoại lai của SIJ?","Nội tại: cùng–chậu trước, gian cốt, cùng–chậu sau, cùng–chậu sau dài. Ngoại lai: thắt lưng–chậu, cùng–ụ ngồi, cùng–gai ngồi.","SIJ"],
  ["Cơ nào bám trực tiếp nhất vào SIJ?","Cơ hình lê (ý nghĩa lâm sàng chưa rõ).","SIJ"],
  ["Nhánh thần kinh chi phối mặt sau SIJ nhất quán nhất?","Nhánh sau của L5 và S1–S3 (đôi khi S4, hạch rễ sau L1–S2, TK mông trên, TK bịt).","SIJ"],
  ["Loại sợi thần kinh có ở SIJ?","Sợi Aδ và sợi C (khớp, dây chằng, bao khớp), cả sợi soma lẫn thần kinh tự chủ.","SIJ"],
  ["Mạch máu mặt trước và mặt sau SIJ?","Trước: ĐM thắt lưng–chậu. Sau: ĐM mông trên, ĐM cùng bên, ĐM cùng giữa.","SIJ"],
  ["Tĩnh mạch SIJ đổ về đâu?","Đám rối TM cùng, thông đám rối Batson, rồi TM chậu trong.","SIJ"],
  ["Nutation là gì?","Xương cùng gật ra trước quanh trục ngang qua lỗ S2 khi đứng, làm tăng ưỡn thắt lưng; counternutation ngược lại.","SIJ"],
  ["Biên độ vận động của SIJ?","Rất nhỏ: khoảng 3–6 mm.","SIJ"],
  ["Biến thể SIJ hay gặp nhất, tỷ lệ?","Khớp phụ (accessory SIJ) 19,1% trong 534 CT khung chậu; gặp nhiều hơn ở béo phì, lớn tuổi, nam.","SIJ"]
 ],
 quiz:[
  ["SIJ là khớp giữa hai xương nào?",["Xương cùng và xương cụt","Xương cùng và xương chậu cùng bên","Xương chậu và xương mu","Xương cùng và đốt sống L5"],1,"SIJ là chỗ tiếp khớp giữa xương cùng và xương chậu cùng bên.","SIJ"],
  ["Mặt khớp SIJ ở phía sau có đặc điểm nào?",["Nhẵn, phủ sụn dày","Thô ráp, có củ lồi cho dây chằng bám","Hoàn toàn phẳng ở mọi lứa tuổi","Không có dây chằng bám"],1,"Mặt trước nhẵn, mặt sau thô ráp có nhiều củ lồi để dây chằng bám.","SIJ"],
  ["Hai loại sụn của SIJ là gì?",["Sụn trong bên xương chậu, sụn sợi bên xương cùng","Sụn trong bên xương cùng, sụn sợi bên xương chậu","Cả hai bên đều sụn sợi","Cả hai bên đều sụn trong"],1,"Sụn trong ở xương cùng, sụn sợi ở xương chậu.","SIJ"],
  ["Bề mặt SIJ thay đổi thế nào sau tuổi 30?",["Phẳng hơn","Mỏng đi và trơn láng","Gồ ghề, đa mặt, cài vào nhau nhiều hơn","Không thay đổi"],2,"Ở người trẻ mặt khớp phẳng; sau tuổi 30 gồ ghề, nhiều mặt hơn.","SIJ"],
  ["Khớp hình thành đầy đủ vào thời điểm nào theo sách?",["Tháng thứ 2 thai kỳ","Tháng thứ 4","Tháng thứ 8","Sau khi sinh 1 năm"],2,"Nhận ra khớp lúc 2 tháng; hình thành đầy đủ ở tháng thứ 8.","SIJ"],
  ["Xương cùng hợp nhất từ 5 đốt thành xương tam giác vào khoảng tuổi nào?",["5 tuổi","10 tuổi","15 tuổi","25 tuổi"],2,"Khoảng 15 tuổi.","SIJ"],
  ["Dây chằng nào nối xương cùng với gai chậu sau trên (PSIS)?",["Cùng–gai ngồi","Cùng–chậu sau (PSL)","Thắt lưng–chậu","Cùng–ụ ngồi"],1,"PSL nối xương cùng với PSIS và vùng xương lân cận.","SIJ"],
  ["Dây chằng thắt lưng–chậu (ILL) đi từ đâu đến đâu?",["Từ L5 đến mào chậu","Từ S1 đến ụ ngồi","Từ xương cụt đến gai ngồi","Từ gai ngồi đến mu"],0,"Từ mỏm ngang L5 (hoặc L4) đến mào chậu; có thể 1–4 bó.","SIJ"],
  ["Dây chằng nào KHÔNG thuộc nhóm ngoại lai (extrinsic)?",["Thắt lưng–chậu","Cùng–ụ ngồi","Cùng–gai ngồi","Cùng–chậu trước"],3,"Cùng–chậu trước là dây chằng nội tại; ngoại lai gồm thắt lưng–chậu, cùng–ụ ngồi, cùng–gai ngồi.","SIJ"],
  ["Cơ nào có sự bám trực tiếp nhất vào SIJ?",["Cơ mông lớn","Cơ hình lê","Cơ đa phân","Cơ bán gân"],1,"Cơ hình lê bám trực tiếp nhất; ý nghĩa lâm sàng chưa rõ.","SIJ"],
  ["Nhánh thần kinh chi phối mặt sau SIJ nhất quán nhất?",["Nhánh trước L2–L3","Nhánh sau L5 và S1–S3","Thần kinh đùi","Thần kinh hông to"],1,"Nhánh sau của L5 và S1–S3; cơ sở của phong bế/đốt nhánh ngoài.","SIJ"],
  ["Loại sợi thần kinh có ở SIJ?",["Chỉ sợi Aβ","Chỉ sợi vận động","Sợi Aδ và sợi C","Không có sợi cảm giác"],2,"Cả sợi Aδ và C chi phối khớp, dây chằng, bao khớp.","SIJ"],
  ["Mặt trước SIJ được cấp máu chủ yếu bởi động mạch nào?",["ĐM mông trên","ĐM cùng giữa","ĐM thắt lưng–chậu","ĐM bịt"],2,"Mặt trước: ĐM thắt lưng–chậu; mặt sau: ĐM mông trên, cùng bên, cùng giữa.","SIJ"],
  ["Tĩnh mạch SIJ thông với đám rối nào?",["Đám rối Batson","Đám rối cánh tay","Đám rối thắt lưng","Đám rối tạng"],0,"Đám rối TM cùng thông với đám rối Batson rồi TM chậu trong.","SIJ"],
  ["Nutation là chuyển động nào?",["Xương cùng gật ra trước quanh trục ngang qua lỗ S2","Xương chậu xoay ra trước","Khớp trượt ngang 3 cm","Xương cùng ngửa ra sau"],0,"Nutation làm tăng ưỡn thắt lưng; ngược lại là counternutation.","SIJ"],
  ["Biên độ vận động của SIJ khoảng bao nhiêu?",["3–6 mm","3–6 cm","10–15 mm","Không vận động"],0,"Biên độ rất nhỏ, 3–6 mm.","SIJ"],
  ["Biến thể giải phẫu SIJ hay gặp nhất, tỷ lệ?",["Khớp phụ, 19,1%","Cùng hóa L5, 2%","Thiếu khớp, 0,1%","Khớp đôi, 50%"],0,"Khớp phụ 19,1% trong 534 CT; hay gặp hơn ở béo phì, lớn tuổi, nam.","SIJ"]
 ]},

{ id:2, t:"Chương 2 · Các bệnh lý của khớp cùng–chậu", yt:"", min:15,
 pts:[
  "Đau SIJ chia 2 nhóm: TRONG khớp (nhiễm trùng, thoái hóa, viêm cột sống thể trục, u) và NGOÀI khớp (dây chằng, điểm bám gân, gãy xương, đau cơ–cân, thai kỳ).",
  "Thoái hóa: nguyên nhân đứng thứ 3 của đau thắt lưng mạn, 13–18,5% bệnh nhân. Sụn xương chậu hỏng trước (lực trượt), sụn xương cùng dày gấp 2–3 lần, giữ lâu.",
  "Rối loạn chức năng SIJ: đau thắt lưng không đặc hiệu (85% đau thắt lưng cấp là không đặc hiệu); chẩn đoán lâm sàng, không có hình ảnh đặc trưng. Kiểu hay gặp: xương chậu phải xoay trước, trái xoay sau, xoắn xương cùng.",
  "Nhiễm trùng SIJ: hiếm; trẻ em và người trẻ; thường một bên; ~50% không rõ yếu tố thuận lợi; cấy máu dương tính <25%.",
  "Thể sinh mủ: hay gặp 20–30 tuổi; sốt, đau mông–thắt lưng–háng, ~10% đau bụng dưới; tư thế chân duỗi xoay ngoài do co thắt cơ hình lê; VS và CRP tăng; cấy máu âm tới 50%; tụ cầu vàng, trực khuẩn mủ xanh; kháng sinh ≥4–8 tuần.",
  "Brucella: SIJ là vị trí hay gặp nhất (>10%); thường nhẹ, tiên lượng tốt; hai bên tới 25%; hỏi sữa chưa tiệt trùng; xét nghiệm Rose bengal; doxycycline + rifampicin.",
  "Tinh thể: gút (thường không triệu chứng, nữ sau mãn kinh, hạt tophi, chọc hút + soi phân cực) và CPPD (vôi hóa sụn tới 40% không triệu chứng). Điều trị NSAID, colchicine, corticosteroid.",
  "Viêm cột sống thể trục: viêm cột sống dính khớp, viêm khớp phản ứng, viêm khớp vảy nến. Viêm cột sống dính khớp: tạo xương mới, dính khớp, cầu xương (syndesmophyte). Mất sụn → hẹp khe → dính sụn → dính xương.",
  "Bảng 2.1: HLA-B27: 90% / 60–80% / 50%. Viêm khớp cùng–chậu: gần 100% / <50% / 20%. Đối xứng / không / không. Khớp ngoại biên: 25% / 90% / >90%.",
  "Viêm khớp phản ứng (hội chứng Reiter): sau nhiễm khuẩn tiết niệu–sinh dục hoặc tiêu hóa; vi khuẩn nội bào (Chlamydia trachomatis, Salmonella enterica); nam <40 tuổi; điều trị NSAID.",
  "U lành: u mạch máu (<1% ở xương cùng), u xương dạng xương (đau đêm, đáp ứng NSAID), u nguyên bào xương, u tế bào khổng lồ (71% u lành xương cùng, tái phát 40–60%).",
  "U ác: chordoma (u ác nguyên phát hay gặp nhất của cột sống, 60% ở cùng–cụt), sarcoma Ewing (trẻ em, xương cùng tiên lượng xấu).",
  "Chấn thương vòng chậu: ép trước–sau, ép bên, trượt dọc. Gãy type I (trước lỗ S2, <1/3 khớp), II (S1–S2, đến 2/3), III (đến S1, >2/3 khớp).",
  "Thai kỳ: hormone relaxin làm khớp lỏng, khung chậu rộng; nguy cơ: forceps, cơn co mạnh, thai to."
 ],
 cards:[
  ["Hai nhóm nguyên nhân đau SIJ?","Trong khớp (nhiễm trùng, thoái hóa, viêm cột sống, u) và ngoài khớp (dây chằng, điểm bám gân, gãy, đau cơ–cân, thai kỳ).","SIJ"],
  ["Thoái hóa SIJ chiếm bao nhiêu trong đau thắt lưng mạn?","Nguyên nhân thứ 3; 13–18,5% bệnh nhân đau thắt lưng mạn.","SIJ"],
  ["Vì sao sụn xương chậu thoái hóa trước sụn xương cùng?","Lực nén thẳng góc bảo vệ sụn xương cùng nhưng tạo lực trượt lên sụn xương chậu; sụn xương cùng còn dày gấp 2–3 lần.","SIJ"],
  ["Rối loạn chức năng SIJ được chẩn đoán bằng gì?","Khám lâm sàng (không có hình ảnh bất thường nhất quán): kiểm tra khung chậu và các nghiệm pháp kích thích.","SIJ"],
  ["Kiểu lệch hay gặp nhất của rối loạn chức năng SIJ?","Xương chậu (innominate) phải xoay trước, trái xoay sau, kèm xoắn xương cùng.","SIJ"],
  ["Nhiễm trùng SIJ: nhóm tuổi và bên?","Trẻ em và người trẻ; thường một bên.","SIJ"],
  ["Nhiễm trùng SIJ: cấy máu dương tính bao nhiêu?","Dưới 25%; tới 40% không tìm ra ổ nhiễm; gần 50% không có yếu tố thuận lợi.","SIJ"],
  ["Viêm khớp cùng–chậu sinh mủ: triệu chứng điển hình?","Sốt, đau liên tục mông–thắt lưng–háng, khập khiễng; ~10% đau bụng dưới; chân duỗi xoay ngoài do co thắt cơ hình lê.","SIJ"],
  ["Xét nghiệm trong viêm khớp cùng–chậu sinh mủ?","VS và CRP tăng; bạch cầu ít tăng; cấy máu âm tới 50%; chọc hút khớp dưới hướng dẫn hình ảnh khi nghi ngờ cao.","SIJ"],
  ["Vi khuẩn hay gặp và thời gian kháng sinh?","Tụ cầu vàng, trực khuẩn mủ xanh; kháng sinh ít nhất 4–8 tuần.","SIJ"],
  ["Brucella trong SIJ: đặc điểm?","SIJ là vị trí hay gặp nhất (>10%); thường nhẹ; hai bên tới 25%; sữa chưa tiệt trùng; Rose bengal; doxycycline + rifampicin.","SIJ"],
  ["Viêm khớp cùng–chậu do gút: ai hay bị, chẩn đoán?","Nữ sau mãn kinh có tiền sử gút; tophi, acid uric cao; chọc hút khớp, soi kính phân cực; vẫn phải loại trừ nhiễm trùng.","SIJ"],
  ["CPPD ở SIJ?","Vôi hóa sụn (chondrocalcinosis) tới 40% không triệu chứng; hình vôi hóa dạng đường; điều trị NSAID, colchicine, corticosteroid.","SIJ"],
  ["Ba bệnh viêm cột sống thể trục hay gặp ở người lớn?","Viêm cột sống dính khớp, viêm khớp phản ứng, viêm khớp vảy nến.","SIJ"],
  ["Đặc trưng nhất của viêm cột sống dính khớp?","Tạo xương mới → dính khớp cùng–chậu và cầu xương (syndesmophyte) ở cột sống.","SIJ"],
  ["Diễn tiến viêm cột sống dính khớp ở SIJ?","Mất sụn → hẹp khe khớp → dính sụn → dính xương (3 giai đoạn: tổn thương → tiêu xương rồi xơ cứng → dính xương).","SIJ"],
  ["HLA-B27 dương tính: viêm cột sống dính khớp / phản ứng / vảy nến?","90% / 60–80% / 50%.","SIJ"],
  ["Viêm khớp cùng–chậu trong 3 bệnh?","Viêm cột sống dính khớp gần 100% (đối xứng); phản ứng <50% (không đối xứng); vảy nến 20% (không đối xứng).","SIJ"],
  ["Viêm khớp phản ứng: nguyên nhân và đối tượng?","Nhiễm khuẩn tiết niệu–sinh dục (Chlamydia trachomatis) hoặc tiêu hóa (Salmonella enterica) ở người có cơ địa; nam <40 tuổi; vi khuẩn nội bào.","SIJ"],
  ["Vì sao đổi tên hội chứng Reiter?","Người đặt tên từng tham gia thí nghiệm y học của Đức quốc xã.","SIJ"],
  ["U xương dạng xương (osteoid osteoma): đặc điểm?","Đau nặng về đêm, đáp ứng NSAID; nam gấp 2–3 lần; có thể teo cơ, đau rễ, vẹo cột sống.","SIJ"],
  ["U tế bào khổng lồ ở xương cùng?","71% u lành xương cùng; tuổi 30–40, nữ nhiều hơn; tái phát 40–60%; xâm lấn SIJ thường không mổ được; xạ trị hoặc nút mạch.","SIJ"],
  ["Chordoma: đặc điểm?","U ác nguyên phát (không lympho) hay gặp nhất của cột sống; 60% ở cùng–cụ; lớn chậm; phát hiện muộn; tiên lượng tùy cắt trọn.","SIJ"],
  ["Sarcoma Ewing ở xương cùng?","U ác hay gặp nhất ở cột sống trẻ em; xương cùng tiên lượng xấu vì u lớn khi phát hiện.","SIJ"],
  ["Ba loại gãy xương cùng ảnh hưởng SIJ?","Type I: trước lỗ S2, <1/3 khớp, vững. Type II: giữa S1–S2, đến 2/3. Type III: đến rễ S1, >2/3 khớp, tổn thương dây chằng nhiều.","SIJ"],
  ["Vì sao đau SIJ trong thai kỳ?","Relaxin làm khớp lỏng, khung chậu rộng; nguy cơ: forceps, cơn co mạnh, thai to.","SIJ"]
 ],
 quiz:[
  ["Thoái hóa SIJ chiếm tỷ lệ nào trong bệnh nhân đau thắt lưng mạn?",["3–5%","13–18,5%","30–40%","Trên 60%"],1,"Thoái hóa SIJ là nguyên nhân thứ 3 của đau thắt lưng mạn, 13–18,5%.","SIJ"],
  ["Vì sao sụn xương chậu thoái hóa sớm hơn sụn xương cùng?",["Sụn xương chậu dày hơn","Lực nén thẳng góc gây thêm lực trượt lên sụn xương chậu","Sụn xương chậu không có hoạt dịch","Do nhiễm trùng"],1,"Lực nén bảo vệ sụn xương cùng nhưng tạo lực trượt lên sụn xương chậu.","SIJ"],
  ["Chẩn đoán rối loạn chức năng SIJ chủ yếu dựa vào?",["MRI luôn thấy phù tủy","Khám lâm sàng","Xét nghiệm HLA-B27","Sinh thiết"],1,"Không có hình ảnh đặc trưng nhất quán; chẩn đoán lâm sàng.","SIJ"],
  ["Nhiễm trùng SIJ thường gặp ở nhóm nào?",["Người cao tuổi","Trẻ em và người trẻ","Phụ nữ mãn kinh","Chỉ người nghiện ma túy"],1,"Hay gặp ở trẻ em và người trẻ, thường một bên.","SIJ"],
  ["Tỷ lệ cấy máu dương tính trong nhiễm trùng SIJ?",["Trên 90%","Khoảng 75%","Dưới 25%","Luôn dương tính"],2,"Cấy máu dương tính dưới 25%; tới 40% không tìm ra ổ nhiễm.","SIJ"],
  ["Tư thế chân duỗi xoay ngoài trong viêm khớp cùng–chậu sinh mủ do?",["Co thắt cơ hình lê","Liệt thần kinh đùi","Trật khớp háng","Gãy cổ xương đùi"],0,"Do co thắt cơ hình lê ở phần gần.","SIJ"],
  ["Cận lâm sàng thường thấy trong viêm khớp cùng–chậu sinh mủ?",["VS và CRP tăng, bạch cầu ít tăng","Bạch cầu giảm mạnh","CRP bình thường","Acid uric tăng"],0,"VS và CRP tăng; bạch cầu ít tăng; cấy máu có thể âm tới 50%.","SIJ"],
  ["Tác nhân hay gặp nhất của viêm khớp cùng–chậu sinh mủ?",["E. coli","Tụ cầu vàng và trực khuẩn mủ xanh","Liên cầu nhóm A","Nấm Candida"],1,"Tụ cầu vàng và P. aeruginosa; kháng sinh ít nhất 4–8 tuần.","SIJ"],
  ["Xét nghiệm nên làm khi nghi viêm khớp cùng–chậu do Brucella?",["Rose bengal","Chọc dò tủy","Điện cơ","Đo mật độ xương"],0,"Làm Rose bengal, nhất là khi cấy máu âm tính; điều trị doxycycline + rifampicin.","SIJ"],
  ["Viêm khớp cùng–chậu do gút điển hình ở?",["Nam trẻ","Phụ nữ sau mãn kinh có tiền sử gút","Trẻ em","Vận động viên"],1,"Hay gặp ở phụ nữ sau mãn kinh có tiền sử gút; dịch khớp soi kính phân cực.","SIJ"],
  ["CPPD gây vôi hóa sụn SIJ không triệu chứng ở tối đa bao nhiêu bệnh nhân?",["5%","15%","40%","90%"],2,"Tới 40%.","SIJ"],
  ["Đặc trưng nhất của viêm cột sống dính khớp?",["Tiêu xương lan tỏa","Tạo xương mới, dính khớp và cầu xương","Lắng đọng tinh thể urat","Thoái hóa sụn đơn thuần"],1,"Tạo xương mới gây dính khớp cùng–chậu và syndesmophyte.","SIJ"],
  ["Tỷ lệ HLA-B27 dương tính trong viêm khớp phản ứng (Bảng 2.1)?",["20%","50%","60–80%","90%"],2,"Viêm cột sống dính khớp 90%, viêm khớp phản ứng 60–80%, vảy nến 50%.","SIJ"],
  ["Tỷ lệ viêm khớp cùng–chậu trong viêm khớp phản ứng (Bảng 2.1)?",["Gần 100%","60–80%","Dưới 50%","20%"],2,"Dưới 50% (không đối xứng); viêm cột sống dính khớp gần 100%; vảy nến 20%.","SIJ"],
  ["Viêm khớp phản ứng thường do tác nhân nào và đặc điểm?",["Virus; ở người già","Vi khuẩn nội bào sau nhiễm khuẩn tiết niệu–sinh dục hoặc tiêu hóa; nam <40 tuổi","Nấm; nữ trẻ","Ký sinh trùng"],1,"Chlamydia trachomatis (sinh dục), Salmonella enterica (tiêu hóa).","SIJ"],
  ["Tên cũ của viêm khớp phản ứng và lý do đổi?",["Hội chứng Reiter; người đặt tên liên quan thí nghiệm của Đức quốc xã","Hội chứng Behçet; trùng tên bệnh khác","Bệnh Bechterew; sai tên","Hội chứng Sjögren; đổi vì lý do kỹ thuật"],0,"Tên cũ là hội chứng Reiter.","SIJ"],
  ["U lành chiếm 71% u lành xương cùng là?",["U tế bào khổng lồ","U xương dạng xương","U mạch máu","U nguyên bào xương"],0,"U tế bào khổng lồ; tái phát 40–60%.","SIJ"],
  ["U xương dạng xương (osteoid osteoma) đặc trưng bởi?",["Đau đêm, đáp ứng NSAID","Đau chỉ khi vận động","Không đau","Liệt hai chân"],0,"Đau nặng về đêm, đỡ với NSAID; nam gấp 2–3 lần.","SIJ"],
  ["Chordoma có đặc điểm?",["U ác nguyên phát hay gặp nhất của cột sống (không lympho); ~60% ở cùng–cụt","U lành ở trẻ em","Chỉ ở thắt lưng","Lan nhanh, phát hiện sớm"],0,"Lớn chậm, phát hiện muộn; tiên lượng tùy cắt trọn.","SIJ"],
  ["Sarcoma Ewing ở xương cùng có tiên lượng?",["Tốt nhất","Xấu vì u lớn khi phát hiện","Luôn tự khỏi","Không điều trị được"],1,"Ngoài xương cùng kiểm soát tại chỗ gần 100%, sống lâu dài 86%; xương cùng thường xấu.","SIJ"],
  ["Gãy xương cùng type III: đặc điểm?",["Chỉ <1/3 khớp","Đến rễ S1, >2/3 khớp, tổn thương dây chằng nhiều","Chỉ trước lỗ S2","Luôn vững"],1,"Type III đến rễ S1, >2/3 khớp; type I trước lỗ S2 (<1/3), type II giữa S1–S2 (đến 2/3).","SIJ"],
  ["Hormone nào làm SIJ lỏng trong thai kỳ?",["Estrogen","Relaxin","Insulin","Cortisol"],1,"Relaxin làm khớp linh động và khung chậu rộng ra.","SIJ"]
 ]},

{ id:3, t:"Chương 3 · Đánh giá chẩn đoán bệnh khớp cùng–chậu", yt:["https://youtu.be/gQSU1yQTxjI"], min:18,
 pts:[
  "Triệu chứng SIJ giống bệnh cột sống thắt lưng → cần phối hợp: bệnh sử, khám, hình ảnh, xét nghiệm, phong bế chẩn đoán.",
  "Khởi phát (bệnh nhân đáp ứng tiêm SIJ): 44% chấn thương, 21% chấn thương tích lũy, 35% âm thầm.",
  "Vị trí đau: mông, mặt sau đùi; 11 người tình nguyện được tiêm SIJ đều đau trong 10 cm dưới và 3 cm ngoài PSIS; một số đau mấu chuyển lớn, mặt ngoài đùi.",
  "Sàng lọc viêm cột sống dính khớp (<50 tuổi): cứng sáng >30 phút; đau đỡ khi vận động, không đỡ khi nghỉ; thức giấc nửa sau đêm; đau mông luân phiên. ≥2/4: nhạy 70,3%, đặc hiệu 81,2%. Đau trước 35 tuổi hay gặp hơn.",
  "Sờ: ấn đau rãnh cùng (ngay trong PSIS) là nghiệm pháp nhạy nhất (Spine 1997).",
  "≥3/5 nghiệm pháp dương: Laslett 2005 nhạy 93,8%, đặc hiệu 78,1%; van der Wurff nhạy 85%, đặc hiệu 79%. Nhưng Schneider 2020, Maigne, Dreyfuss: không nghiệm pháp nào dự đoán đáp ứng tiêm.",
  "Nghiệm pháp: distraction (ấn hai ASIS ra sau, nằm ngửa); Gaenslen (một chân thõng, một chân gập; không làm ở thay khớp háng); FABER/Patrick (đau bẹn → háng; đau SIJ/mông → SIJ); thigh thrust (háng 90°, ấn dọc đùi); compression (nằm nghiêng ép mào chậu); sacral thrust (nằm sấp ấn xương cùng).",
  "Drop test: nghiệm pháp chủ động – đứng nhón gót rồi thả đột ngột, gối duỗi. Distraction PSIS: nhạy 100%, đặc hiệu 89% (46 bệnh nhân). Schober: cách 10 cm; tăng >5 cm là bình thường.",
  "Phong bế chẩn đoán trong khớp: tiêu chuẩn nhiều năm; IASP 1994: đau ở vùng SIJ + tái hiện đau khi ép khớp + giảm đau sau gây tê tại khớp.",
  "Hình ảnh: X-quang rẻ nhưng kém nhạy sớm; phim chuẩn AP khung chậu; Ferguson (chếch 20–30°) không hơn (Omar 2017). CT: không tương quan giữa thoái hóa và triệu chứng (Backlund 2017, 123 vs 123). MRI: phù tủy xương, ngấm gadolinium, xơ cứng, bào mòn; phân độ New York cải tiến 0–4.",
  "Xét nghiệm: CRP, VS không đặc hiệu; HLA-B27 hữu ích nhất cho viêm cột sống dính khớp (649 bệnh nhân: dương tính 65,9% vs 27%; OR 2,8 ở nghiên cứu khác).",
  "Kết luận: chẩn đoán đúng SIJ là bắt buộc để chọn điều trị; nghiệm pháp khám thiếu độ nhạy/đặc hiệu nên thường cần phong bế chẩn đoán."
 ],
 cards:[
  ["Khởi phát đau SIJ (bệnh nhân đáp ứng tiêm) theo tỷ lệ?","44% chấn thương, 21% chấn thương tích lũy (tập luyện, đi lệch), 35% âm thầm.","SIJ"],
  ["Vùng lan đau của SIJ trong nghiên cứu tình nguyện viên?","Trong 10 cm dưới và 3 cm ngoài PSIS; một số lan ra mấu chuyển lớn và mặt ngoài đùi.","SIJ"],
  ["4 tiêu chí sàng lọc viêm cột sống dính khớp (<50 tuổi)?","Cứng buổi sáng >30 phút; đau đỡ khi vận động, không đỡ khi nghỉ; thức giấc nửa sau đêm; đau mông luân phiên.","SIJ"],
  ["Có ≥2/4 tiêu chí: độ nhạy và đặc hiệu?","Nhạy 70,3%, đặc hiệu 81,2%.","SIJ"],
  ["Nghiệm pháp sờ nào nhạy nhất?","Ấn đau rãnh cùng (ngay trong PSIS), Spine 1997.","SIJ"],
  ["Laslett 2005: ≥3/5 nghiệm pháp dương?","Nhạy 93,8%, đặc hiệu 78,1% (distraction, compression, thigh thrust, sacral thrust, Gaenslen).","SIJ"],
  ["Van der Wurff: ≥3/5 nghiệm pháp?","Nhạy 85%, đặc hiệu 79% (thay sacral thrust bằng FABER).","SIJ"],
  ["Nghiên cứu nào cho thấy nghiệm pháp khám không dự đoán đáp ứng tiêm?","Schneider 2020, Maigne, Dreyfuss: không nghiệm pháp đơn lẻ hay phối hợp nào liên quan đáp ứng phong bế.","SIJ"],
  ["Nghiệm pháp distraction?","Nằm ngửa, hai tay ấn hai ASIS ra sau về phía bàn → giãn hai SIJ; đau = gợi ý rối loạn chức năng SIJ.","SIJ"],
  ["Nghiệm pháp Gaenslen?","Nằm ngửa, chân bên khám thõng ngoài bàn, chân kia gập; ép hai chân ngược chiều; không làm ở bệnh nhân thay khớp háng.","SIJ"],
  ["FABER là viết tắt của?","Flexion, ABduction, External Rotation (Patrick); đau bẹn → bệnh khớp háng; đau SIJ/mông → bệnh SIJ.","SIJ"],
  ["Thigh thrust?","Nằm ngửa, một tay đỡ xương cùng, háng gập 90°, ấn dọc trục đùi xuống bàn; giống labral scour của háng.","SIJ"],
  ["Compression?","Nằm nghiêng, háng gối gập, ấn mào chậu trên xuống sàn → ép hai SIJ.","SIJ"],
  ["Sacral thrust?","Nằm sấp, mô cái ở đỉnh cong xương cùng, ấn thẳng xuống bàn → ép hai SIJ.","SIJ"],
  ["Drop test khác các nghiệm pháp khác thế nào?","Là nghiệm pháp chủ động: đứng, chống tường, nhón gót rồi thả đột ngột, gối duỗi → lực trượt lên SIJ cùng bên.","SIJ"],
  ["Distraction PSIS: số liệu?","Nhạy 100%, đặc hiệu 89% nhưng chỉ 46 bệnh nhân (Zurich).","SIJ"],
  ["Schober test dùng để làm gì và cách làm?","Đánh giá độ linh hoạt cột sống thắt lưng; đánh dấu ngang mào chậu và 10 cm trên; cúi người; tăng >5 cm là bình thường.","SIJ"],
  ["3 tiêu chí chẩn đoán đau SIJ của IASP 1994?","Đau ở vùng SIJ; tái hiện đau khi ép khớp; giảm đau sau gây tê tại khớp.","SIJ"],
  ["Hạn chế của phong bế chẩn đoán trong khớp?","SIJ có cả cấu trúc trong và ngoài khớp, tất cả có thể gây đau.","SIJ"],
  ["X-quang trong chẩn đoán SIJ?","Rẻ nhất nhưng kém nhạy với tổn thương sớm; phim chuẩn AP khung chậu; Ferguson (chếch 20–30°) không hơn.","SIJ"],
  ["CT: mối liên quan thoái hóa – triệu chứng?","Không tương quan đáng kể (Backlund 2017: 123 có triệu chứng so với 123 chứng).","SIJ"],
  ["Dấu hiệu viêm khớp cùng–chậu trên MRI?","Phù tủy xương cạnh khớp, ngấm gadolinium, xơ cứng, bào mòn.","SIJ"],
  ["Phân độ tổn thương theo New York cải tiến?","0 bình thường; 2 xơ cứng + bào mòn; 3 hẹp khe/dính một phần; 4 dính xương hoàn toàn.","SIJ"],
  ["HLA-B27 trong chẩn đoán?","Xét nghiệm hữu ích nhất cho viêm cột sống dính khớp; 649 bệnh nhân: 65,9% vs 27%; OR 2,8 ở nghiên cứu khác.","SIJ"],
  ["CRP và VS trong nghi viêm SIJ?","Có thể làm nhưng tăng không đặc hiệu.","SIJ"]
 ],
 quiz:[
  ["Tỷ lệ khởi phát do chấn thương ở bệnh nhân đáp ứng tiêm SIJ?",["21%","35%","44%","60%"],2,"44% chấn thương, 21% tích lũy, 35% âm thầm.","SIJ"],
  ["Nghiên cứu tình nguyện viên: vùng đau sau tiêm SIJ nằm ở?",["Trên L1","Trong 10 cm dưới và 3 cm ngoài PSIS","Bẹn","Cẳng chân"],1,"Tất cả đau trong vùng này; một số lan ra mấu chuyển lớn và mặt ngoài đùi.","SIJ"],
  ["Đặc điểm đau kiểu viêm (viêm cột sống dính khớp)?",["Đau tăng khi vận động, đỡ khi nghỉ","Cứng sáng >30 phút, đau đỡ khi vận động","Chỉ đau khi ho","Đau ngay sau chấn thương"],1,"Bốn tiêu chí: cứng sáng >30 phút; đỡ khi vận động; thức giấc nửa đêm sau; đau mông luân phiên.","SIJ"],
  ["≥2/4 tiêu chí sàng lọc cho độ nhạy và đặc hiệu?",["93,8% và 78,1%","70,3% và 81,2%","85% và 79%","100% và 89%"],1,"Nhạy 70,3%, đặc hiệu 81,2%.","SIJ"],
  ["Nghiệm pháp sờ nhạy nhất?",["Ấn đau mấu chuyển lớn","Ấn đau rãnh cùng, ngay trong PSIS","Ấn đau L5","Ấn đau mào chậu"],1,"Spine 1997.","SIJ"],
  ["Laslett 2005: ≥3/5 nghiệm pháp dương cho?",["Nhạy 93,8%, đặc hiệu 78,1%","Nhạy 78%, đặc hiệu 94%","Nhạy 50%, đặc hiệu 50%","Nhạy 100%, đặc hiệu 89%"],0,"Bộ năm: distraction, compression, thigh thrust, sacral thrust, Gaenslen.","SIJ"],
  ["Kết quả Schneider 2020?",["Gaenslen dự đoán đáp ứng tiêm","Không nghiệm pháp nào dự đoán đáp ứng tiêm","Mọi nghiệm pháp đều nhạy 100%","FABER chẩn đoán xác định"],1,"Không nghiệm pháp đơn lẻ hay phối hợp nào liên quan đáp ứng phong bế.","SIJ"],
  ["Nghiệm pháp distraction tác động bằng cách?",["Ấn ra sau hai gai chậu trước trên","Ép mào chậu xuống sàn","Gập háng 90° ấn dọc đùi","Thả gót đột ngột"],0,"Nằm ngửa, hai tay ấn hai ASIS ra sau về phía bàn.","SIJ"],
  ["Nghiệm pháp không nên làm ở bệnh nhân thay khớp háng?",["Gaenslen","Distraction","Compression","Sacral thrust"],0,"Gaenslen ép lực lên chân; không làm khi thay khớp háng.","SIJ"],
  ["FABER dương tính với đau ở bẹn gợi ý?",["Bệnh SIJ","Bệnh trong khớp háng","Thoát vị đĩa đệm","Viêm cột sống"],1,"Đau bẹn gợi ý khớp háng; đau SIJ/mông gợi ý SIJ.","SIJ"],
  ["Thigh thrust tương tự nghiệm pháp nào của khớp háng?",["Labral scour","Trendelenburg","Thomas","Ober"],0,"Tư thế giống labral scour nên khớp háng cũng có thể đau.","SIJ"],
  ["Compression test thực hiện ở tư thế?",["Nằm ngửa","Nằm sấp","Nằm nghiêng, háng gối gập","Đứng"],2,"Ấn mào chậu trên xuống sàn → ép hai SIJ.","SIJ"],
  ["Drop test khác các nghiệm pháp khác ở điểm?",["Chủ động, bệnh nhân tự thực hiện","Cần gây tê","Chỉ ở nằm sấp","Cần máy"],0,"Đứng nhón gót rồi thả đột ngột, gối duỗi.","SIJ"],
  ["Schober: khoảng cách tăng bao nhiêu là cột sống bình thường?",["Trên 5 cm","Dưới 1 cm","Đúng 10 cm","Dưới 2 cm"],0,"Hai điểm cách 10 cm; tăng >5 cm là bình thường.","SIJ"],
  ["Tiêu chuẩn IASP 1994 KHÔNG gồm?",["Đau ở vùng SIJ","Tái hiện đau khi ép khớp","Giảm đau sau gây tê tại khớp","Phải có HLA-B27 dương tính"],3,"Ba tiêu chí: đau vùng SIJ, tái hiện đau, giảm đau sau gây tê.","SIJ"],
  ["Phim X-quang chuẩn đánh giá SIJ?",["Phim AP khung chậu","Phim Ferguson bắt buộc","Phim nghiêng","Phim cột sống cổ"],0,"Ferguson không hơn phim AP (Omar 2017).","SIJ"],
  ["Backlund 2017 (CT) cho thấy?",["Thoái hóa trên CT tương quan chặt với đau","Không tương quan đáng kể giữa thoái hóa trên CT và triệu chứng","CT không phát hiện được gai xương","MRI luôn tốt hơn"],1,"123 có triệu chứng so với 123 chứng.","SIJ"],
  ["Dấu hiệu viêm SIJ trên MRI?",["Phù tủy xương cạnh khớp","Sỏi mật","Giãn tĩnh mạch","Thoát vị nhân nhầy"],0,"Cùng ngấm gadolinium, xơ cứng, bào mòn.","SIJ"],
  ["Độ 4 theo New York cải tiến là?",["Bình thường","Xơ cứng và bào mòn","Hẹp khe khớp","Dính xương hoàn toàn"],3,"Độ 0 bình thường; độ 4 dính xương hoàn toàn.","SIJ"],
  ["Xét nghiệm có ích nhất cho viêm cột sống dính khớp?",["CRP","HLA-B27","VS","Acid uric"],1,"CRP và VS tăng không đặc hiệu.","SIJ"],
  ["Nghiên cứu 649 bệnh nhân: HLA-B27 dương tính ở nhóm viêm cột sống thể trục?",["27%","65,9%","90%","100%"],1,"65,9% ở nhóm có bệnh, 27% ở nhóm không bệnh.","SIJ"],
  ["Vì sao cuối chương khuyên phong bế chẩn đoán?",["Nghiệm pháp khám thiếu độ nhạy và đặc hiệu","Phong bế luôn chính xác tuyệt đối","Hình ảnh luôn sai","Để điều trị ngay"],0,"Chẩn đoán đúng SIJ là bắt buộc để chọn điều trị; nghiệm pháp khám không đủ tin cậy.","SIJ"]
 ]}
];

/* ----- Giao diện mục Đau khớp cùng chậu ----- */
(function(){
  const st=document.createElement("style");
  st.textContent=".sijtabs{display:flex;gap:6px;margin:10px 0}.sijtabs button{flex:1;min-height:var(--tap);border:1.5px solid var(--accent);background:var(--card);color:var(--accent);border-radius:10px;font-weight:700;cursor:pointer}.sijtabs button[aria-pressed=true]{background:var(--accent);color:var(--on-accent)}a.btn.block{display:block;text-align:center;text-decoration:none}.sijpts{margin:0;padding-left:20px}.sijpts li{margin:8px 0;line-height:1.55}";
  document.head.appendChild(st);
})();

let sijCh=0, sijMode="sum", sijKnown=LS.get("pp-sij-known",{}), sijScores=LS.get("pp-sij-scores",{});
let sijCi=0, sijFlip=false, sijOnlyNew=false;
let sijQ={order:[],pos:0,right:0,ord:null,picked:null,wrong:[],redo:false};

function sijShuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function sijStart(idxs,redo){sijQ={order:sijShuffle(idxs),pos:0,right:0,ord:null,picked:null,wrong:[],redo:!!redo};}
function sijReset(){sijCi=0;sijFlip=false;const n=SIJ[sijCh].quiz.length;sijStart(Array.from({length:n},(_,i)=>i),false);}
sijReset();

function sijChips(){return SIJ.map((c,i)=>`<button data-sijch="${i}" class="${sijCh===i?"on":""}">Chương ${c.id}</button>`).join("");}

function sijVideo(c){
  const L=Array.isArray(c.yt)?c.yt:(c.yt?[c.yt]:[]);
  if(!L.length) return `<div class="note"><b>Link video sẽ được thêm sau.</b> Bài giảng dài khoảng ${c.min} phút.</div>`;
  return L.map((u,i)=>`<a class="btn pri block" style="margin-bottom:8px" href="${esc(u)}" target="_blank" rel="noopener">▶ ${L.length>1?"Video "+(i+1)+"/"+L.length:"Xem video bài giảng"} trên YouTube</a>`).join("");
}

function sijView(){
  const c=SIJ[sijCh];
  const head=`<div class="card"><h2>${esc(c.t)}</h2><div class="body">${sijVideo(c)}
    <div class="sijtabs">${[["sum","Tóm tắt"],["card","Thẻ ôn"],["quiz","Kiểm tra"]].map(([k,l])=>`<button data-sijmode="${k}" aria-pressed="${sijMode===k}">${l}</button>`).join("")}</div></div></div>`;
  if(sijMode==="sum") return head+`<div class="card"><h2>Ý chính cần nhớ · ${c.pts.length} ý</h2><div class="body"><ol class="sijpts">${c.pts.map(p=>`<li>${esc(p)}</li>`).join("")}</ol></div><div class="note">Tóm tắt soạn từ sách ${chips(["SIJ"])}. Với số liệu quan trọng, đối chiếu lại sách gốc.</div></div>`;
  if(sijMode==="card") return head+sijCardView(c);
  return head+sijQuizView(c);
}

function sijCardView(c){
  const all=c.cards;
  const list=all.map((x,i)=>({x,i})).filter(o=>!sijOnlyNew||!sijKnown[`${c.id}-${o.i}`]);
  const nk=all.filter((_,i)=>sijKnown[`${c.id}-${i}`]).length;
  const top=`<div class="card"><h2>Thẻ ôn · Chương ${c.id}</h2><div class="row"><span class="nm">Đã nhớ</span><span class="sub"><span class="bar" style="display:block;margin-top:4px"><i style="width:${nk/all.length*100}%"></i></span></span><span class="val">${nk}<small>/ ${all.length}</small></span></div><div class="note"><label class="flexr"><input type="checkbox" id="sijonlynew" ${sijOnlyNew?"checked":""}> Chỉ hiện thẻ chưa nhớ</label></div></div>`;
  if(!list.length) return top+`<div class="card"><div class="empty"><b>Đã nhớ hết ${all.length} thẻ</b><br><button class="btn" style="margin-top:10px" data-sijact="allcards">Ôn lại toàn bộ</button></div></div>`;
  if(sijCi>=list.length) sijCi=0; const {x,i}=list[sijCi];
  return top+`<div class="flip ${sijFlip?"on":""}" data-sijact="flip" role="button" tabindex="0" aria-label="Lật thẻ"><div class="in">
  <div class="face"><span class="lbl">Thẻ ${sijCi+1}/${list.length} · Câu hỏi</span><div class="q">${esc(x[0])}</div><span class="s">Chạm để xem đáp án</span></div>
  <div class="face back"><span class="lbl">Đáp án</span><div>${esc(x[1])}</div><span class="s">Nguồn: ${x[2]}</span></div></div></div>
  <div class="cardnav"><button class="btn bad" data-sijknow="0" data-i="${i}">Chưa nhớ</button><button class="btn good" data-sijknow="1" data-i="${i}">Đã nhớ</button></div>`;
}

function sijQuizView(c){
  const Q=c.quiz, S=sijQ, best=sijScores[c.id];
  const bestTxt=best?` · Tốt nhất ${best.r}/${best.n}`:"";
  if(S.pos>=S.order.length){
    const tot=S.order.length;
    return `<div class="card"><h2>Kết quả · Chương ${c.id}${S.redo?" (làm lại câu sai)":""}</h2><div class="empty"><div class="big">${S.right}/${tot}</div>
    <p class="muted small">${S.right/tot>=.8?"Đạt mục tiêu (≥80%).":"Dưới 80%: nên xem lại tóm tắt và thẻ ôn rồi làm lại."}</p>
    ${S.wrong.length?`<button class="btn pri" data-sijact="redowrong">Làm lại ${S.wrong.length} câu sai</button> `:""}
    <button class="btn" data-sijact="restart">Làm lại toàn bộ (xáo thứ tự)</button></div></div>`;
  }
  const qi=S.order[S.pos], q=Q[qi];
  if(!S.ord) S.ord=sijShuffle(q[1].map((_,j)=>j));
  const ord=S.ord;
  return `<div class="card"><h2>Câu ${S.pos+1}/${S.order.length} · Đúng ${S.right}${bestTxt}</h2><div class="body">
  <div class="bar"><i style="width:${S.pos/S.order.length*100}%"></i></div>
  <div class="title" style="font-size:16px">${esc(q[0])}</div>
  ${ord.map((j,k)=>`<button class="opt ${S.picked==null?"":j===q[2]?"right":j===S.picked?"wrong":""}" data-sijpick="${j}" ${S.picked!=null?"disabled":""}>${String.fromCharCode(65+k)}. ${esc(q[1][j])}</button>`).join("")}</div>
  ${S.picked!=null?`<div class="note"><b>${S.picked===q[2]?"Đúng.":"Chưa đúng."}</b> ${esc(q[3])} ${chips([q[4]])}</div><div class="body"><button class="btn pri block" data-sijact="next">${S.pos+1<S.order.length?"Câu tiếp":"Xem kết quả"}</button></div>`:""}</div>`;
}

document.addEventListener("click",e=>{
  const b=e.target.closest("[data-sijch],[data-sijmode],[data-sijact],[data-sijknow],[data-sijpick]"); if(!b) return;
  const c=SIJ[sijCh];
  if(b.dataset.sijch!==undefined){sijCh=Number(b.dataset.sijch);sijReset();return render();}
  if(b.dataset.sijmode){sijMode=b.dataset.sijmode;return render();}
  if(b.dataset.sijknow!==undefined){const k=`${c.id}-${b.dataset.i}`; if(b.dataset.sijknow==="1") sijKnown[k]=1; else delete sijKnown[k]; LS.set("pp-sij-known",sijKnown); sijFlip=false; if(!(sijOnlyNew&&b.dataset.sijknow==="1")) sijCi++; return render();}
  if(b.dataset.sijpick!==undefined){
    if(sijQ.picked!=null) return;
    sijQ.picked=Number(b.dataset.sijpick); const qi=sijQ.order[sijQ.pos];
    if(sijQ.picked===c.quiz[qi][2]) sijQ.right++; else sijQ.wrong.push(qi);
    return render();
  }
  const a=b.dataset.sijact;
  if(a==="flip"){sijFlip=!sijFlip;b.classList.toggle("on",sijFlip);return;}
  if(a==="allcards"){sijOnlyNew=false;sijCi=0;return render();}
  if(a==="next"){
    sijQ.pos++;sijQ.picked=null;sijQ.ord=null;
    if(sijQ.pos>=sijQ.order.length&&!sijQ.redo){const prev=sijScores[c.id];if(!prev||sijQ.right>prev.r){sijScores[c.id]={r:sijQ.right,n:sijQ.order.length};LS.set("pp-sij-scores",sijScores);}}
    return render();
  }
  if(a==="restart"){sijReset();return render();}
  if(a==="redowrong"){const w=sijQ.wrong.slice();sijStart(w,true);return render();}
});
document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.dataset&&e.target.dataset.sijact==="flip"){e.preventDefault();e.target.click();}});
document.addEventListener("change",e=>{if(e.target.id==="sijonlynew"){sijOnlyNew=e.target.checked;sijCi=0;sijFlip=false;render();}});
