// Bài tóm tắt theo buổi: khóa "tuầnIndex-ngày" (tuần 1 = 0). Nội dung do Claude tóm tắt, không chép nguyên văn nguồn.
const LESSONS = {

"0-0": {t:"ICD-11: bảy nhóm đau mạn", min:15, src:["ICD11","BENN19"], h:`
<p class="lead">Lần đầu tiên, bảng phân loại bệnh quốc tế có một hệ thống mã riêng cho đau mạn. Hiểu cấu trúc này giúp ghi chẩn đoán thống nhất và nhìn đau mạn như một vấn đề cần điều trị riêng, không chỉ là triệu chứng của bệnh khác.</p>

<h3>Bối cảnh</h3>
<p>ICD-10 không có cách mã hóa có hệ thống cho đau mạn, nên bệnh nhân đau mạn gần như "vô hình" trong thống kê và trong hồ sơ. Một nhóm công tác của IASP do Treede và Rief đứng đầu đã xây dựng phân loại mới cùng WHO. Đại hội đồng Y tế Thế giới thông qua ICD-11 ngày 25/5/2019 và ICD-11 có hiệu lực từ 01/01/2022. Phân loại đã được thử nghiệm thực địa trước khi đưa vào sử dụng.</p>

<h3>Định nghĩa</h3>
<p><b>Đau mạn</b> là đau kéo dài hoặc tái diễn trên 3 tháng. Đây là mốc duy nhất về thời gian; ICD-11 không dùng mốc 6 tháng.</p>

<h3>Cấu trúc: 1 nhóm nguyên phát và 6 nhóm thứ phát</h3>
<div class="scrollx"><table>
<tr><th>Nhóm</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
<tr><td><b>Đau mạn nguyên phát</b></td><td>Đau là vấn đề chính, không giải thích tốt hơn bằng bệnh khác</td><td>Đau cơ xơ hóa, CRPS, đau thắt lưng mạn không đặc hiệu</td></tr>
<tr><td>Liên quan ung thư</td><td>Do khối u, di căn, hoặc do điều trị ung thư</td><td>Đau do di căn xương, đau thần kinh do hóa trị</td></tr>
<tr><td>Sau phẫu thuật hoặc chấn thương</td><td>Xuất hiện hoặc tăng lên sau mổ hay chấn thương, kéo dài quá thời gian lành</td><td>Đau mạn sau mổ thoát vị bẹn, sau mổ vú</td></tr>
<tr><td>Thần kinh</td><td>Do tổn thương hoặc bệnh của hệ cảm giác thân thể</td><td>Đau sau zona, đau đa dây thần kinh do đái tháo đường</td></tr>
<tr><td>Đau đầu hoặc vùng mặt thứ phát</td><td>Do một bệnh nền xác định</td><td>Đau đầu do cổ, đau dây V thứ phát</td></tr>
<tr><td>Nội tạng thứ phát</td><td>Do bệnh tạng xác định</td><td>Đau do viêm tụy mạn</td></tr>
<tr><td>Cơ xương khớp thứ phát</td><td>Do bệnh xương khớp xác định</td><td>Đau do thoái hóa khớp, viêm khớp dạng thấp</td></tr>
</table></div>
<p class="muted small">Trong ICD-11 các mục này nằm dưới mã MG30 (MG30.0 là đau mạn nguyên phát). Nên tra lại mã chi tiết trên ICD-11 Browser của WHO trước khi dùng cho hồ sơ.</p>

<h3>Mã mở rộng: mô tả thêm cho chẩn đoán</h3>
<p>Ngoài mã chẩn đoán, ICD-11 cho phép ghi thêm <b>mức độ nặng</b> theo ba chiều: cường độ đau, mức phiền muộn và mức cản trở hoạt động. Có thể ghi thêm diễn tiến theo thời gian (liên tục, từng cơn) và sự hiện diện của yếu tố tâm lý – xã hội. Điểm quan trọng là mức độ nặng không chỉ là con số NRS.</p>

<h3>Ý nghĩa với thực hành</h3>
<p>Thứ nhất, với đau thứ phát, nên ghi cả bệnh nền và mã đau mạn. Ví dụ bệnh nhân thoái hóa khớp gối đau 2 năm có hai chẩn đoán: thoái hóa khớp (bệnh nền) và đau mạn cơ xương khớp thứ phát. Cách ghi này cho thấy đau cần một kế hoạch riêng. Thứ hai, nhóm đau mạn liên quan ung thư phân biệt rõ đau do bản thân khối u với đau do điều trị và đau do bệnh kèm không liên quan, giúp định hướng điều trị khác nhau cho người đang điều trị và người đã khỏi ung thư (Bennett 2019).</p>

<div class="ev"><b>Loại bằng chứng.</b> Đây là hệ thống phân loại xây dựng bằng đồng thuận chuyên gia và thử nghiệm thực địa, không phải kết quả từ RCT. Giá trị của nó nằm ở tính thống nhất khi ghi chẩn đoán.</div>

<div class="case"><b>Tự kiểm tra.</b> Bệnh nhân nữ 58 tuổi, đau vai trái 5 tháng sau gãy đầu trên xương cánh tay đã liền xương. Xếp vào nhóm nào? <details><summary>Xem gợi ý</summary>Đau mạn sau chấn thương (thứ phát). Cần khám thêm để xem có thành phần thần kinh hay đủ tiêu chuẩn CRPS (khi đó CRPS thuộc nhóm nguyên phát).</details></div>
`},

"0-1": {t:"Đau mạn nguyên phát", min:15, src:["ICD11","NICE"], h:`
<p class="lead">"Nguyên phát" không có nghĩa là không rõ nguyên nhân hay do tâm lý. Nó có nghĩa là chính cơn đau, cùng mức phiền muộn và giảm chức năng đi kèm, là vấn đề chính cần điều trị.</p>

<h3>Tiêu chuẩn chẩn đoán</h3>
<p>Một bệnh nhân được chẩn đoán đau mạn nguyên phát khi đủ cả bốn điều kiện:</p>
<ol>
<li>Đau ở một hay nhiều vùng cơ thể.</li>
<li>Kéo dài hoặc tái diễn trên 3 tháng.</li>
<li>Kèm rối loạn cảm xúc đáng kể (lo âu, giận dữ, thất vọng, khí sắc trầm) <b>hoặc</b> giảm chức năng đáng kể trong sinh hoạt và tham gia xã hội.</li>
<li>Không được giải thích tốt hơn bằng một tình trạng đau mạn khác.</li>
</ol>
<p>Điều kiện thứ tư là điểm dễ nhầm. Có thể có bất thường trên phim (thoái hóa, phồng đĩa đệm) nhưng nếu bất thường đó không đủ giải thích mức đau và mức ảnh hưởng, vẫn có thể chẩn đoán đau nguyên phát. NICE diễn đạt là đau không có nguyên nhân rõ ràng, hoặc đau và tác động của nó không tương xứng với tổn thương quan sát được.</p>

<h3>Năm nhóm con</h3>
<div class="scrollx"><table>
<tr><th>Nhóm con</th><th>Ví dụ thường gặp</th></tr>
<tr><td>Đau lan tỏa mạn</td><td>Đau cơ xơ hóa</td></tr>
<tr><td>Hội chứng đau vùng phức hợp (CRPS)</td><td>CRPS sau gãy đầu dưới xương quay</td></tr>
<tr><td>Đau đầu hoặc vùng mặt nguyên phát</td><td>Migraine mạn, đau đầu căng thẳng mạn, rối loạn thái dương hàm mạn, hội chứng bỏng rát miệng</td></tr>
<tr><td>Đau nội tạng nguyên phát</td><td>Hội chứng ruột kích thích, đau vùng chậu mạn nguyên phát</td></tr>
<tr><td>Đau cơ xương khớp nguyên phát</td><td>Đau thắt lưng mạn không đặc hiệu, đau cổ mạn không đặc hiệu</td></tr>
</table></div>
<p>CRPS nằm trong nhóm nguyên phát dù thường khởi phát sau chấn thương, vì cơ chế và tiêu chuẩn chẩn đoán của nó không quy về một tổn thương mô cụ thể.</p>

<h3>Tại sao phân biệt nguyên phát và thứ phát lại quan trọng</h3>
<p>Hai nhóm có hướng điều trị khác nhau. NICE NG193 chỉ đưa khuyến cáo điều trị cho đau mạn nguyên phát: ưu tiên chương trình vận động, liệu pháp tâm lý (CBT, ACT), châm cứu trong một số bối cảnh, và cân nhắc thuốc chống trầm cảm. NICE khuyến cáo không khởi trị nhiều nhóm thuốc cho nhóm này, trong đó có opioid và gabapentinoid. Hội Đau Anh đã phản biện một số khuyến cáo hạn chế này; phần điều trị sẽ học ở giai đoạn 2. Với đau thứ phát, điều trị bệnh nền và cơ chế cụ thể (ví dụ thuốc cho đau thần kinh, can thiệp khớp mặt sau) có vai trò lớn hơn.</p>

<div class="ev"><b>Loại bằng chứng.</b> Tiêu chuẩn chẩn đoán là đồng thuận. Các khuyến cáo điều trị của NICE dựa trên tổng quan hệ thống, nhưng nhiều khuyến cáo có độ chắc chắn thấp, nên cần đọc kèm phản biện.</div>

<div class="case"><b>Tự kiểm tra.</b> Nam 45 tuổi, đau thắt lưng 1 năm, MRI có phồng đĩa đệm L4–L5 không chèn rễ, không có triệu chứng rễ, nghỉ việc 3 tháng vì đau, mất ngủ. Chẩn đoán nào hợp lý? <details><summary>Xem gợi ý</summary>Đau mạn nguyên phát cơ xương khớp (đau thắt lưng mạn không đặc hiệu). Phồng đĩa đệm không chèn rễ không giải thích tốt hơn mức đau và mức giảm chức năng. Ghi thêm mức độ nặng và yếu tố tâm lý – xã hội.</details></div>
`},

"0-2": {t:"Ba mô tả cơ chế đau", min:20, src:["FIN16","KOSEK","FITZ"], h:`
<p class="lead">ICD-11 trả lời câu hỏi "bệnh nhân bị gì". Mô tả cơ chế trả lời câu hỏi "đau được tạo ra như thế nào", và câu trả lời này quyết định chọn thuốc hay chọn can thiệp.</p>

<h3>Định nghĩa</h3>
<p><b>Đau cảm thụ (nociceptive)</b>: đau do tổn thương thực sự hoặc nguy cơ tổn thương ở mô không phải thần kinh, thông qua hoạt hóa thụ thể cảm thụ đau. Ví dụ: đau khớp do thoái hóa, đau xương do di căn.</p>
<p><b>Đau thần kinh (neuropathic)</b>: đau là hậu quả trực tiếp của tổn thương hoặc bệnh ảnh hưởng <i>hệ cảm giác thân thể</i>. Chia thành ngoại biên (đau sau zona, bệnh đa dây thần kinh) và trung ương (sau đột quỵ, tổn thương tủy). Tổn thương thần kinh vận động hay thần kinh tự chủ đơn thuần không đủ để gọi là đau thần kinh.</p>
<p><b>Đau nociplastic</b>: đau do quá trình cảm thụ đau bị biến đổi, dù không có bằng chứng rõ về tổn thương mô hoạt hóa thụ thể ngoại biên, cũng không có bằng chứng về tổn thương hay bệnh của hệ cảm giác thân thể. Ví dụ điển hình là đau cơ xơ hóa.</p>

<h3>Dấu hiệu lâm sàng gợi ý</h3>
<div class="scrollx"><table>
<tr><th></th><th>Cảm thụ</th><th>Thần kinh</th><th>Nociplastic</th></tr>
<tr><td>Phân bố</td><td>Khu trú tại cấu trúc tổn thương</td><td>Theo vùng chi phối của dây, rễ hoặc đường dẫn truyền</td><td>Lan theo vùng, không theo giải phẫu thần kinh</td></tr>
<tr><td>Tính chất</td><td>Nhức, đau khi cử động hay chịu lực</td><td>Rát, điện giật, kim châm, tê</td><td>Âm ỉ, lan tỏa, thay đổi</td></tr>
<tr><td>Khám</td><td>Đau khi ấn hay vận động cấu trúc đó</td><td>Dấu hiệu cảm giác âm tính (giảm cảm giác) và dương tính (allodynia) trong vùng chi phối</td><td>Tăng nhạy cảm đau lan rộng, không kèm tổn thương tương xứng</td></tr>
<tr><td>Kèm theo</td><td>Tương xứng với mức viêm, tổn thương</td><td>Có bệnh hay tổn thương thần kinh liên quan</td><td>Mệt mỏi, rối loạn giấc ngủ, khó tập trung, nhạy cảm âm thanh, ánh sáng</td></tr>
</table></div>

<h3>Ba điểm dễ nhầm</h3>
<p>Thứ nhất, nociplastic <b>không đồng nghĩa</b> với "nhạy cảm hóa trung ương". Nhạy cảm hóa trung ương là thuật ngữ sinh lý thần kinh, còn nociplastic là mô tả cơ chế dùng trong lâm sàng (Kosek 2021). Thứ hai, nociplastic <b>không đồng nghĩa</b> với đau mạn nguyên phát: một bên là mô tả cơ chế, một bên là chẩn đoán ICD-11. Thứ ba, ba cơ chế <b>có thể cùng tồn tại</b> trên một bệnh nhân. Ví dụ đau thắt lưng có cả thành phần cảm thụ từ khớp mặt sau, thành phần thần kinh từ rễ, và thành phần nociplastic.</p>

<h3>Vì sao điều này quan trọng với người làm can thiệp</h3>
<p>Thủ thuật can thiệp chủ yếu nhắm vào nguồn đau cảm thụ (khớp mặt sau, khớp cùng chậu) hoặc nguồn đau thần kinh khu trú (rễ, dây ngoại biên). Khi thành phần nociplastic chiếm ưu thế, có thể suy luận rằng hiệu quả của can thiệp sẽ thấp hơn. Đây là suy luận từ cơ chế, chưa phải kết luận từ RCT so sánh trực tiếp, nên cần chọn bệnh nhân cẩn thận.</p>

<div class="ev"><b>Loại bằng chứng.</b> Các định nghĩa là thuật ngữ IASP (đồng thuận). Bảng dấu hiệu gợi ý là tổng hợp lâm sàng từ các tổng quan; không dấu hiệu đơn lẻ nào đủ để chẩn đoán.</div>
`},

"0-3": {t:"Phân độ đau thần kinh: possible, probable, definite", min:20, src:["FIN16"], h:`
<p class="lead">Hệ thống phân độ của NeuPSIG (Finnerup 2016) biến câu hỏi "có phải đau thần kinh không" thành một quy trình từng bước, dùng được tại giường bệnh.</p>

<h3>Quy trình ba bước</h3>
<div class="steps">
<div><b>Bước 1 → Possible.</b> Bệnh sử có tổn thương hoặc bệnh thần kinh liên quan, <b>và</b> vùng đau hợp lý về mặt giải phẫu thần kinh (khớp với vùng chi phối của tổn thương đó).</div>
<div><b>Bước 2 → Probable.</b> Thêm vào đó, khám thấy <b>dấu hiệu cảm giác</b> trong chính vùng phân bố hợp lý ấy. Dấu hiệu có thể âm tính (giảm hoặc mất cảm giác chạm, kim, nóng, lạnh) hoặc dương tính (allodynia, tăng cảm đau).</div>
<div><b>Bước 3 → Definite.</b> Thêm vào đó, có <b>xét nghiệm xác nhận</b> tổn thương hoặc bệnh của hệ cảm giác thân thể, ví dụ điện cơ – dẫn truyền thần kinh, hình ảnh học, sinh thiết da đếm sợi thần kinh nhỏ, QST.</div>
</div>
<p>Bản 2016 sắp xếp lại thứ tự cho sát thực hành: bắt đầu từ bệnh sử, rồi đến khám, cuối cùng mới đến xét nghiệm.</p>

<h3>Vai trò của bộ câu hỏi sàng lọc</h3>
<p>DN4, LANSS và painDETECT giúp nhận ra bệnh nhân <i>có khả năng</i> có thành phần thần kinh, hữu ích khi khám nhanh hay khi người khám chưa quen. Nhưng chúng không nằm trong các bậc phân độ: một bộ câu hỏi dương tính không làm bệnh nhân thành "probable" hay "definite". Muốn lên bậc vẫn phải khám và làm xét nghiệm.</p>

<h3>Vùng phân bố "hợp lý về giải phẫu"</h3>
<div class="scrollx"><table>
<tr><th>Bệnh</th><th>Vùng đau và rối loạn cảm giác điển hình</th><th>Xét nghiệm có thể xác nhận</th></tr>
<tr><td>Đa dây thần kinh do đái tháo đường</td><td>Đối xứng hai bên, ở xa (kiểu đi tất, đi găng)</td><td>Dẫn truyền thần kinh; sinh thiết da khi tổn thương sợi nhỏ</td></tr>
<tr><td>Đau sau zona</td><td>Một khoanh da, một bên</td><td>Chưa có xét nghiệm xác nhận dùng thường quy; xem bảng gợi ý trong Finnerup 2016</td></tr>
<tr><td>Bệnh lý rễ thắt lưng</td><td>Theo khoanh da của rễ</td><td>MRI tương hợp, điện cơ</td></tr>
<tr><td>Đau sau đột quỵ</td><td>Vùng cơ thể tương ứng tổn thương não</td><td>CT hoặc MRI sọ não</td></tr>
<tr><td>Tổn thương dây sau mổ</td><td>Vùng chi phối của dây bị tổn thương</td><td>Dẫn truyền thần kinh, siêu âm thần kinh</td></tr>
</table></div>

<h3>Lời cảnh báo của chính tác giả</h3>
<p>Ngay cả mức "definite" cũng <b>không luôn chứng minh quan hệ nhân quả</b>. Một bệnh nhân đái tháo đường có bệnh đa dây thần kinh đã xác nhận vẫn có thể đau bàn chân vì nguyên nhân khác. Phân độ cho biết mức độ chắc chắn về sự hiện diện của tổn thương thần kinh, không thay cho phán đoán lâm sàng.</p>

<div class="ev"><b>Loại bằng chứng.</b> Hệ thống phân độ là đồng thuận chuyên gia của NeuPSIG, xây dựng sau khi phân tích cách bản 2008 được sử dụng trong các nghiên cứu. Đây là công cụ chuẩn hóa, không phải xét nghiệm có độ nhạy và độ đặc hiệu được xác lập.</div>

<div class="case"><b>Tự kiểm tra.</b> Nữ 62 tuổi, 4 tháng sau mổ cắt vú phải, đau rát mặt trong cánh tay phải và hõm nách, khám thấy giảm cảm giác kim châm và allodynia đúng vùng đó. Phân độ? <details><summary>Xem gợi ý</summary>Probable: có phẫu thuật nạo hạch nách có thể tổn thương dây bì cánh tay trong hoặc dây liên sườn – cánh tay, vùng đau hợp lý, có dấu hiệu cảm giác cùng vùng. Cần xét nghiệm xác nhận tổn thương dây mới thành definite.</details></div>
`},

"0-4": {t:"Đau hỗn hợp và chẩn đoán thay đổi theo thời gian", min:15, src:["NICE","FITZ","KOSEK"], h:`
<p class="lead">Trong thực tế, phần lớn bệnh nhân đau mạn không nằm gọn trong một ô. Chẩn đoán tốt là chẩn đoán nhiều lớp và được xem lại định kỳ.</p>

<h3>Đau nguyên phát và thứ phát có thể cùng tồn tại</h3>
<p>NICE NG193 nêu rõ hai nhóm này có thể có mặt cùng lúc trên một bệnh nhân. Khi đó dùng phán đoán lâm sàng để quyết định cùng bệnh nhân nên điều trị phần nào trước. Ví dụ một bệnh nhân viêm khớp dạng thấp đã kiểm soát tốt viêm nhưng vẫn đau lan tỏa toàn thân, mệt, mất ngủ: có thể vừa có đau cơ xương khớp thứ phát vừa có đau lan tỏa mạn nguyên phát. Các tổng quan về nociplastic (Fitzcharles 2021) mô tả hiện tượng thành phần nociplastic chồng lên các bệnh viêm và thoái hóa.</p>

<h3>Đau hỗn hợp về cơ chế</h3>
<div class="scrollx"><table>
<tr><th>Tình huống</th><th>Các thành phần có thể có</th></tr>
<tr><td>Đau thắt lưng có lan xuống chân</td><td>Cảm thụ (khớp mặt sau, đĩa đệm) + thần kinh (rễ) ± nociplastic</td></tr>
<tr><td>Đau do ung thư di căn cột sống</td><td>Cảm thụ (xương) + thần kinh (chèn rễ, đám rối)</td></tr>
<tr><td>Thoái hóa khớp gối lâu năm</td><td>Cảm thụ + nociplastic ở một số bệnh nhân</td></tr>
<tr><td>Đau sau mổ kéo dài</td><td>Cảm thụ (sẹo, cơ) + thần kinh (tổn thương dây)</td></tr>
</table></div>
<p>Ghi rõ từng thành phần giúp chọn điều trị phù hợp: thuốc cho đau thần kinh nhắm vào thành phần thần kinh, block hoặc RF nhắm vào nguồn cảm thụ khu trú, còn vận động trị liệu và liệu pháp tâm lý quan trọng hơn khi có thành phần nociplastic.</p>

<h3>Chẩn đoán có thể thay đổi</h3>
<p>NICE khuyến cáo nhận thức rằng chẩn đoán đau mạn nguyên phát ban đầu có thể thay đổi theo thời gian, và cần đánh giá lại khi bệnh cảnh thay đổi. Ba tình huống cần nghĩ lại chẩn đoán:</p>
<ul>
<li>Xuất hiện triệu chứng mới, đặc biệt là red flags (sụt cân, sốt, dấu hiệu thần kinh mới).</li>
<li>Không đáp ứng như dự kiến với điều trị đúng cơ chế.</li>
<li>Kiểu đau thay đổi rõ (lan rộng, đổi tính chất).</li>
</ul>

<h3>Tránh hai cái bẫy</h3>
<p>Bẫy thứ nhất là gán nhãn "đau do tâm lý" khi không tìm được tổn thương. Định nghĩa đau của IASP 2020 và khái niệm nociplastic đều nhấn mạnh rằng đau không có tổn thương nhìn thấy vẫn là đau thật. Bẫy thứ hai là ngược lại: đổ hết cho tổn thương trên phim, như thoái hóa hay phồng đĩa đệm, trong khi chúng thường gặp cả ở người không đau.</p>

<div class="ev"><b>Loại bằng chứng.</b> Nguyên tắc "chẩn đoán nhiều lớp, đánh giá lại" là khuyến cáo thực hành của NICE và đồng thuận chuyên gia. Bảng đau hỗn hợp là minh họa lâm sàng, không phải tiêu chuẩn chẩn đoán.</div>
`},

"0-5": {t:"Thực hành phân loại: 5 ca mẫu", min:20, src:["ICD11","FIN16","KOSEK","WOLFE16"], h:`
<p class="lead">Với mỗi ca, tự ghi ra ba dòng trước khi mở đáp án: (1) nhóm ICD-11, (2) các thành phần cơ chế, (3) nếu có thành phần thần kinh thì phân độ. Sau đó làm tương tự với 5 bệnh nhân thật của anh/chị.</p>

<div class="case"><b>Ca 1.</b> Nam 52 tuổi, đau thắt lưng 8 tháng, không lan xuống chân, đau tăng khi ngồi lâu, khám thần kinh bình thường, MRI thoái hóa nhẹ L4–L5, L5–S1. Sợ vận động, đã nghỉ việc 2 tháng.
<details><summary>Đáp án gợi ý</summary>ICD-11: đau mạn nguyên phát cơ xương khớp (đau thắt lưng mạn không đặc hiệu), vì thoái hóa nhẹ không giải thích tốt hơn mức đau và mức giảm chức năng. Cơ chế: chưa xác định; có thể có thành phần cảm thụ (khớp mặt sau, cần khám thêm và cân nhắc block chẩn đoán ở giai đoạn sau). Cần ghi mức độ nặng và cờ vàng (sợ vận động).</details></div>

<div class="case"><b>Ca 2.</b> Nữ 70 tuổi, zona ngực phải T5 cách 5 tháng. Hiện đau rát, đau như điện giật dải ngực phải, áo chạm vào cũng đau. Khám: allodynia khi chạm bông và giảm cảm giác kim châm đúng khoanh da T5 phải.
<details><summary>Đáp án gợi ý</summary>ICD-11: đau mạn thần kinh ngoại biên, đau sau zona. Phân độ: tối thiểu probable (bệnh liên quan, vùng hợp lý, có dấu hiệu cảm giác cùng vùng). Cơ chế: thần kinh.</details></div>

<div class="case"><b>Ca 3.</b> Nam 38 tuổi, 6 tháng sau mổ thoát vị bẹn trái đặt lưới, đau rát vùng bẹn lan xuống bìu trái, tê bì vùng da quanh sẹo.
<details><summary>Đáp án gợi ý</summary>ICD-11: đau mạn sau phẫu thuật. Có thể có thành phần thần kinh do tổn thương dây chậu bẹn, chậu hạ vị hoặc nhánh sinh dục của dây sinh dục đùi: possible, lên probable nếu khám thấy dấu hiệu cảm giác đúng vùng chi phối. Có thể kèm thành phần cảm thụ quanh sẹo và lưới.</details></div>

<div class="case"><b>Ca 4.</b> Nữ 64 tuổi, ung thư vú di căn xương, đau cột sống ngực âm ỉ liên tục, đau tăng khi xoay người, có cơn đau lan theo dải quanh ngực.
<details><summary>Đáp án gợi ý</summary>ICD-11: đau mạn liên quan ung thư (đau do ung thư). Cơ chế hỗn hợp: cảm thụ (xương) + có thể thần kinh (chèn rễ ngực, gợi ý bởi đau lan theo dải). Cần loại trừ chèn ép tủy nếu có dấu hiệu thần kinh mới.</details></div>

<div class="case"><b>Ca 5.</b> Nữ 41 tuổi, đau nhiều vùng (cổ, vai, lưng, hông, hai chân) trên 1 năm, mệt mỏi, ngủ không sâu, khó tập trung, xét nghiệm viêm bình thường.
<details><summary>Đáp án gợi ý</summary>ICD-11: đau mạn nguyên phát, đau lan tỏa mạn. Cần đánh giá theo tiêu chuẩn đau cơ xơ hóa ACR 2016 (học ở tuần 6). Cơ chế: nociplastic, có thể ở mức probable theo Kosek 2021 nếu khám có tăng nhạy cảm đau và có các bệnh kèm như trên. Tiêu chuẩn Kosek được xây dựng cho đau cơ xương khớp; áp dụng cho đau lan tỏa là hợp lý nhưng cần lưu ý điều này.</details></div>

<h3>Mẫu ghi chẩn đoán dùng cho bệnh nhân thật</h3>
<div class="ev">Vị trí: … · Thời gian: … tháng<br>ICD-11: nguyên phát / thứ phát (nhóm …) · Bệnh nền: …<br>Cơ chế: cảm thụ / thần kinh (phân độ …) / nociplastic (possible, probable)<br>Mức độ nặng: cường độ … · phiền muộn … · cản trở …<br>Yếu tố duy trì: giấc ngủ, khí sắc, sợ vận động, công việc…</div>
`}
};
