CARDS[1] = [
 ["Mốc thời gian đau mạn theo ICD-11","Đau kéo dài hoặc tái diễn trên 3 tháng.","ICD11"],
 ["ICD-11 chia đau mạn thành mấy nhóm?","7 nhóm: 1 nhóm đau mạn nguyên phát và 6 nhóm đau mạn thứ phát.","ICD11"],
 ["Sáu nhóm đau mạn thứ phát","Liên quan ung thư; sau phẫu thuật hoặc chấn thương; thần kinh; đau đầu hoặc vùng mặt thứ phát; nội tạng thứ phát; cơ xương khớp thứ phát.","ICD11"],
 ["Tiêu chuẩn đau mạn nguyên phát","Đau ở một hay nhiều vùng, trên 3 tháng, kèm rối loạn cảm xúc hoặc giảm chức năng đáng kể, và không giải thích tốt hơn bằng một tình trạng đau mạn khác.","ICD11"],
 ["Năm nhóm con của đau mạn nguyên phát","Đau lan tỏa mạn (gồm đau cơ xơ hóa); CRPS; đau đầu hoặc vùng mặt nguyên phát; đau nội tạng nguyên phát; đau cơ xương khớp nguyên phát.","ICD11"],
 ["Mã mở rộng 'mức độ nặng' trong ICD-11 gồm những gì?","Không chỉ cường độ đau mà cả mức độ phiền muộn và mức độ cản trở hoạt động.","ICD11"],
 ["Định nghĩa đau thần kinh","Đau là hậu quả trực tiếp của tổn thương hoặc bệnh ảnh hưởng hệ cảm giác thân thể.","FIN16"],
 ["Phân độ đau thần kinh: possible","Có tiền sử tổn thương hoặc bệnh thần kinh liên quan và vùng đau hợp lý về mặt giải phẫu thần kinh.","FIN16"],
 ["Phân độ đau thần kinh: probable","Possible, cộng thêm dấu hiệu cảm giác khi khám nằm trong cùng vùng phân bố hợp lý đó.","FIN16"],
 ["Phân độ đau thần kinh: definite","Probable, cộng thêm xét nghiệm xác nhận tổn thương hoặc bệnh (điện cơ, hình ảnh, sinh thiết da…). Tác giả lưu ý: 'definite' không luôn chứng minh quan hệ nhân quả.","FIN16"],
 ["Vai trò của DN4, LANSS, painDETECT","Sàng lọc, gợi ý khả năng đau thần kinh; không thay thế khám và phân độ.","FIN16"],
 ["Đau cảm thụ (nociceptive)","Đau do tổn thương thực sự hoặc nguy cơ tổn thương ở mô không phải thần kinh, qua hoạt hóa thụ thể cảm thụ đau.","RAJA"],
 ["Đau nociplastic","Đau do cảm thụ đau bị biến đổi, dù không có bằng chứng rõ về tổn thương mô hoạt hóa thụ thể ngoại biên hay về tổn thương, bệnh của hệ cảm giác thân thể.","KOSEK"],
 ["Nociplastic có đồng nghĩa với 'nhạy cảm hóa trung ương'?","Không. Nhạy cảm hóa trung ương là thuật ngữ sinh lý thần kinh; nociplastic là mô tả cơ chế lâm sàng.","KOSEK"],
 ["Nociplastic có phải là 'đau mạn nguyên phát'?","Không. Đau mạn nguyên phát là chẩn đoán ICD-11; nociplastic là mô tả cơ chế. Hai khái niệm phản ánh hai khía cạnh khác nhau.","KOSEK"],
 ["Tiêu chuẩn nociplastic mức 'possible' (Kosek 2021)","Đau trên 3 tháng, phân bố theo vùng hơn là khu trú, không giải thích hoàn toàn bằng cơ chế cảm thụ hay thần kinh, và có dấu hiệu tăng nhạy cảm đau khi khám tại vùng đó.","KOSEK"],
 ["Để lên mức 'probable' nociplastic cần thêm gì?","Tiền sử tăng nhạy cảm đau tại vùng, kèm bệnh kèm như nhạy cảm với âm thanh, ánh sáng, mùi; rối loạn giấc ngủ; mệt mỏi; khó khăn nhận thức.","KOSEK"],
 ["Đau nguyên phát và thứ phát có thể cùng tồn tại?","Có. Chẩn đoán ban đầu cũng có thể thay đổi theo thời gian, nên cần đánh giá lại khi bệnh cảnh thay đổi.","NICE"]
];
QUIZ[1] = [
 ["Theo ICD-11, đau mạn được chia thành mấy nhóm lớn?",["3","5","7","11"],2,"1 nhóm nguyên phát và 6 nhóm thứ phát.","ICD11"],
 ["Nhóm nào sau đây thuộc đau mạn NGUYÊN PHÁT trong ICD-11?",["Đau mạn sau phẫu thuật","CRPS","Đau mạn liên quan ung thư","Đau thần kinh sau zona"],1,"CRPS được xếp vào đau mạn nguyên phát. Ba lựa chọn còn lại là đau mạn thứ phát.","ICD11"],
 ["Yếu tố nào bắt buộc trong tiêu chuẩn đau mạn nguyên phát?",["Có tổn thương trên MRI","Kèm rối loạn cảm xúc hoặc giảm chức năng đáng kể","Đáp ứng với thuốc chống trầm cảm","Đau trên 6 tháng"],1,"Đau trên 3 tháng kèm rối loạn cảm xúc hoặc giảm chức năng đáng kể, không giải thích tốt hơn bằng tình trạng khác.","ICD11"],
 ["Bệnh nhân tiểu đường đau rát bàn chân hai bên, khám giảm cảm giác kim châm kiểu đi găng – tất. Chưa làm điện cơ. Phân độ đau thần kinh?",["Possible","Probable","Definite","Chưa đủ để phân độ"],1,"Có bệnh liên quan, vùng đau hợp lý, có dấu hiệu cảm giác cùng vùng là 'probable'. Cần xét nghiệm xác nhận mới thành 'definite'.","FIN16"],
 ["DN4 dương tính đơn thuần cho phép kết luận gì?",["Đau thần kinh definite","Đau thần kinh probable","Gợi ý khả năng có thành phần thần kinh, cần khám và phân độ","Loại trừ đau nociplastic"],2,"Bộ câu hỏi sàng lọc không thay thế phân độ dựa trên tiền sử, khám và xét nghiệm.","FIN16"],
 ["Trường hợp nào phù hợp nhất với mức 'possible' nociplastic theo Kosek 2021?",["Đau gối khu trú, X-quang thoái hóa nặng, đau khi đi","Đau thắt lưng 2 năm lan rộng vùng, không giải thích hết bằng thoái hóa, ấn đau lan tỏa và allodynia tại vùng","Đau rát dải ngực sau zona","Đau 6 tuần sau mổ thoát vị"],1,"Đủ các yếu tố: trên 3 tháng, phân bố theo vùng, không giải thích hoàn toàn bằng cơ chế khác, dấu hiệu tăng nhạy cảm khi khám.","KOSEK"],
 ["Phát biểu nào ĐÚNG về nociplastic?",["Đồng nghĩa với nhạy cảm hóa trung ương","Đồng nghĩa với đau mạn nguyên phát ICD-11","Là mô tả cơ chế, có thể cùng tồn tại với thành phần cảm thụ hoặc thần kinh","Chỉ chẩn đoán được bằng QST"],2,"Nociplastic là mô tả cơ chế, khác chẩn đoán ICD-11 và khác thuật ngữ sinh lý 'nhạy cảm hóa trung ương'.","KOSEK"],
 ["Mã mở rộng mức độ nặng trong ICD-11 đánh giá những gì?",["Chỉ cường độ đau","Cường độ, mức phiền muộn và mức cản trở hoạt động","Số thuốc đang dùng","Thời gian mắc bệnh"],1,"Mức độ nặng gồm ba chiều: cường độ, phiền muộn, cản trở chức năng.","ICD11"],
 ["Bệnh nhân thoái hóa khớp gối kèm đau lan tỏa toàn thân đủ tiêu chuẩn đau cơ xơ hóa. Cách chẩn đoán phù hợp?",["Chỉ ghi thoái hóa khớp","Chỉ ghi đau cơ xơ hóa","Ghi cả đau thứ phát do thoái hóa và đau mạn nguyên phát lan tỏa","Chờ điều trị thoái hóa rồi mới chẩn đoán"],2,"Đau nguyên phát và thứ phát có thể cùng tồn tại; ghi cả hai giúp định hướng điều trị riêng cho từng thành phần.","NICE"],
 ["Định nghĩa đau thần kinh yêu cầu tổn thương ở đâu?",["Bất kỳ phần nào của hệ thần kinh","Hệ cảm giác thân thể","Hệ thần kinh tự chủ","Vỏ não vận động"],1,"Tổn thương hoặc bệnh ảnh hưởng hệ cảm giác thân thể (somatosensory system).","FIN16"]
];
