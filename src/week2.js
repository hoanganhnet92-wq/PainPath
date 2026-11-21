// ===== Tuần 2: Hỏi bệnh và khám lâm sàng =====
Object.assign(SRC,{
 DN4:{lvl:"cs",t:"Bouhassira D et al. Comparison of pain syndromes associated with nervous or somatic lesions and development of a new neuropathic pain diagnostic questionnaire (DN4) (2005)",n:"Pain 2005;114(1-2):29–36. 160 bệnh nhân, hai chuyên gia chẩn đoán độc lập làm chuẩn tham chiếu. DN4 gồm 10 mục: 7 triệu chứng và 3 dấu hiệu khám cảm giác.",doi:"10.1016/j.pain.2004.12.010"},
 LASL05:{lvl:"cs",t:"Laslett M et al. Diagnosis of sacroiliac joint pain: validity of individual provocation tests and composites of tests (2005)",n:"Man Ther 2005;10(3):207–18. Chỉ 48 bệnh nhân, chuẩn tham chiếu là tiêm thuốc tê vào khớp cùng chậu. Từ 3 trong 6 nghiệm pháp dương tính: độ nhạy 94%, độ đặc hiệu 78%.",doi:"10.1016/j.math.2005.01.003"},
 DOWN13:{lvl:"sr",t:"Downie A et al. Red flags to screen for malignancy and fracture in patients with low back pain: systematic review (2013)",n:"BMJ 2013;347:f7095. 14 nghiên cứu, 53 cờ đỏ. Nhiều cờ đỏ trong guideline gần như không làm đổi xác suất gãy xương hoặc ung thư. Truy cập mở.",doi:"10.1136/bmj.f7095"}
});

Object.assign(LESSONS,{

"1-0": {t:"Bệnh sử đau có cấu trúc", min:15, src:["DN4","FIN16"], h:`
<p class="lead">Bệnh sử đau mạn tốt cho biết phần lớn những gì cần biết trước khi chạm vào bệnh nhân: đau ở đâu, kiểu đau nào, ảnh hưởng ra sao và bệnh nhân hiểu cơn đau của mình thế nào.</p>

<h3>Các mục cần hỏi</h3>
<div class="scrollx"><table>
<tr><th>Mục</th><th>Hỏi gì</th><th>Gợi ý về</th></tr>
<tr><td><b>Vị trí và lan</b></td><td>Cho bệnh nhân chỉ hoặc tô trên hình người. Đau khu trú hay lan rộng, lan theo dải nào</td><td>Lan theo vùng chi phối của một rễ hoặc dây gợi ý đau thần kinh; lan rộng nhiều vùng gợi ý nociplastic</td></tr>
<tr><td><b>Khởi phát và diễn tiến</b></td><td>Bắt đầu khi nào, sau sự kiện gì (mổ, chấn thương, zona, hóa trị), liên tục hay từng cơn</td><td>Thời gian trên 3 tháng để xếp đau mạn; sự kiện khởi phát để xếp nhóm thứ phát</td></tr>
<tr><td><b>Tính chất</b></td><td>Rát, điện giật, kim châm, tê, ngứa, nhức sâu, âm ỉ, bóp nghẹt</td><td>Rát, điện giật, kim châm là các mô tả hay gặp ở đau thần kinh</td></tr>
<tr><td><b>Cường độ</b></td><td>Hiện tại, trung bình và nặng nhất trong 1 tuần (NRS 0–10)</td><td>Theo dõi đáp ứng điều trị</td></tr>
<tr><td><b>Yếu tố tăng, giảm</b></td><td>Tư thế, vận động, ho hắt hơi, ban đêm, thời tiết, stress</td><td>Đau tăng khi ho, rặn gợi ý rễ; đau đêm không đổi tư thế là cờ cần lưu ý</td></tr>
<tr><td><b>Triệu chứng đi kèm</b></td><td>Tê, yếu, rối loạn tiểu tiện, sụt cân, sốt</td><td>Tổn thương thần kinh, bệnh nặng nền</td></tr>
<tr><td><b>Chức năng và tâm lý</b></td><td>Đi lại, làm việc, giấc ngủ, khí sắc, lo sợ vận động</td><td>Thành phần ICD-11 "mức độ nặng"; cờ vàng</td></tr>
<tr><td><b>Niềm tin và kỳ vọng</b></td><td>Bệnh nhân nghĩ vì sao mình đau; mong muốn điều gì ở điều trị</td><td>Điều chỉnh giáo dục bệnh nhân (tuần 16)</td></tr>
</table></div>

<h3>Giới hạn của lời mô tả</h3>
<p>Từ ngữ mô tả đau giúp gợi ý nhưng không đủ để kết luận. Bộ câu hỏi DN4 được xây dựng vì nhóm tác giả thấy chỉ riêng mô tả triệu chứng chưa phân biệt tốt đau thần kinh và không phải thần kinh: DN4 kết hợp bảy mục triệu chứng với ba mục dấu hiệu khám tại giường (xem buổi sau). Vì vậy bệnh sử gợi ý, khám xác nhận.</p>

<h3>Mẹo thực hành</h3>
<p>Để bệnh nhân kể tự do 2–3 phút đầu rồi mới hỏi chi tiết. Ghi lại nguyên văn một hai cụm từ họ dùng để mô tả đau, vì chúng giúp theo dõi sau này và cho thấy cách họ hiểu bệnh. Với bệnh nhân đã khám nhiều nơi, xin xem trước hồ sơ và phim cũ để tránh lặp lại.</p>

<div class="ev"><b>Loại bằng chứng.</b> Danh mục câu hỏi dựa trên thực hành chuẩn và giáo trình, không phải một thử nghiệm riêng. Dữ liệu trực tiếp trong buổi này chỉ là thiết kế của DN4 (Bouhassira 2005, <a href="https://doi.org/10.1016/j.pain.2004.12.010" target="_blank" rel="noopener">DOI</a>), một nghiên cứu mô tả 160 bệnh nhân.</div>

<div class="case"><b>Tự kiểm tra.</b> Nam 58 tuổi, đau thắt lưng lan xuống mặt sau cẳng chân 5 tháng, đau tăng khi ho. Em cần hỏi thêm ít nhất 3 điều gì để phân biệt đau rễ với đau khớp mặt sau hoặc đau nociplastic?</div>
`},

"1-1": {t:"Thuốc đã dùng và các cờ màu", min:15, src:["DOWN13","LBP"], h:`
<p class="lead">Hai việc dễ bị bỏ sót trong buổi khám đầu: biết chính xác bệnh nhân đã dùng gì, và sàng lọc các dấu hiệu cảnh báo về bệnh nặng cũng như yếu tố tâm lý – xã hội làm đau kéo dài.</p>

<h3>Tiền sử dùng thuốc</h3>
<p>Với mỗi thuốc, ghi tên, liều, thời gian dùng, mức giảm đau, tác dụng phụ và bệnh nhân có thật sự uống đúng không. Hỏi riêng thuốc không kê đơn, thuốc đông y, thực phẩm chức năng, rượu và thuốc lá. Với opioid, tính liều morphine tương đương hằng ngày (MME) để dùng sau này theo CDC 2022 (tuần 13–14). Ghi sẵn thuốc chống đông, chống tiểu cầu vì quyết định thủ thuật cột sống phụ thuộc vào đó (tuần 21).</p>

<h3>Hệ cờ màu</h3>
<div class="scrollx"><table>
<tr><th>Cờ</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
<tr><td><b>Đỏ</b></td><td>Nghi bệnh nặng, cần làm rõ ngay</td><td>Tiền sử ung thư, sụt cân, sốt, yếu liệt tiến triển, rối loạn cơ tròn, tê vùng yên ngựa</td></tr>
<tr><td><b>Cam</b></td><td>Rối loạn tâm thần cần đánh giá riêng</td><td>Trầm cảm nặng, ý tưởng tự sát, rối loạn nhân cách</td></tr>
<tr><td><b>Vàng</b></td><td>Niềm tin, cảm xúc, hành vi làm đau kéo dài</td><td>Sợ vận động, thảm họa hóa, tin rằng đau là tổn thương đang tiến triển</td></tr>
<tr><td><b>Xanh dương</b></td><td>Nhận thức về công việc</td><td>Công việc nặng, ít hỗ trợ, sợ mất việc</td></tr>
<tr><td><b>Đen</b></td><td>Yếu tố hệ thống và bồi thường</td><td>Tranh chấp bảo hiểm, chính sách nơi làm việc</td></tr>
</table></div>
<p class="muted small">Cách phân màu là quy ước thực hành, mô tả theo giáo trình; không phải một công cụ được kiểm chứng như nhau cho cả năm màu.</p>

<h3>Cờ đỏ: dùng có cân nhắc</h3>
<p>Tổng quan hệ thống của Downie 2013 (14 nghiên cứu, 53 cờ đỏ trong đau thắt lưng) cho thấy nhiều cờ đỏ trong guideline gần như không làm đổi xác suất gãy xương hoặc ung thư, hoặc chưa được kiểm chứng. Các cờ có giá trị cao hơn gồm tiền sử ung thư (xác suất ung thư cột sống sau test khoảng 33%), dùng corticosteroid kéo dài, chấn thương nặng và tuổi cao với gãy xương. Khi có nhiều cờ cùng lúc thì xác suất gãy xương tăng, nhưng khoảng tin cậy rất rộng. Điều này nghĩa là một cờ đỏ đơn lẻ không đủ để chụp phim ồ ạt, nhưng nhiều cờ hoặc tiền sử ung thư thì cần được làm rõ.</p>
<p><b>Cấp cứu cần nhớ:</b> yếu chi dưới tiến triển, tê vùng yên ngựa, bí tiểu hoặc tiểu không tự chủ gợi ý hội chứng đuôi ngựa, cần chẩn đoán hình ảnh và hội chẩn phẫu thuật ngay.</p>

<div class="ev"><b>Loại bằng chứng.</b> Số liệu về cờ đỏ là tổng quan hệ thống nhưng dữ liệu dị biệt, không gộp được (Downie 2013, <a href="https://doi.org/10.1136/bmj.f7095" target="_blank" rel="noopener">DOI</a>); chỉ áp dụng cho đau thắt lưng. Hệ năm màu và ngưỡng hành động là thực hành chuẩn, chưa có thử nghiệm đối chứng.</div>

<div class="case"><b>Tự kiểm tra.</b> Nữ 66 tuổi dùng prednisolon kéo dài vì viêm khớp dạng thấp, đau thắt lưng đột ngột sau khi cúi nhấc đồ nhẹ. Cờ nào đáng chú ý nhất và em đề nghị gì?</div>
`},

"1-2": {t:"Khám thần kinh", min:15, src:["FIN16","EDPM"], h:`
<p class="lead">Khám thần kinh tập trung trả lời ba câu hỏi: có tổn thương thần kinh không, ở mức nào (rễ, đám rối, dây ngoại biên, tủy, não) và có cần xử trí khẩn cấp không.</p>

<h3>Trình tự</h3>
<p>Quan sát dáng đi, tư thế, teo cơ, run giật bó sợi cơ. Sau đó khám sức cơ theo thang MRC 0–5, phản xạ gân xương, cảm giác (buổi sau) và dấu hiệu bó tháp khi nghi tổn thương tủy hoặc não.</p>

<h3>Rễ và cơ tương ứng (kiến thức giáo khoa)</h3>
<div class="scrollx"><table>
<tr><th>Rễ</th><th>Cơ để khám</th><th>Phản xạ</th></tr>
<tr><td>C5</td><td>Dạng vai (delta)</td><td>Cơ nhị đầu (C5–6)</td></tr>
<tr><td>C6</td><td>Gập khuỷu, duỗi cổ tay</td><td>Cơ cánh tay quay (C6)</td></tr>
<tr><td>C7</td><td>Duỗi khuỷu (tam đầu)</td><td>Cơ tam đầu (C7)</td></tr>
<tr><td>C8, T1</td><td>Gập ngón tay (C8), dạng ngón (T1)</td><td>—</td></tr>
<tr><td>L3–L4</td><td>Duỗi gối, gập mu bàn chân (L4)</td><td>Gân bánh chè</td></tr>
<tr><td>L5</td><td>Duỗi ngón cái, đi bằng gót</td><td>Thường không có phản xạ riêng</td></tr>
<tr><td>S1</td><td>Gập gan bàn chân, đi bằng mũi chân</td><td>Gân gót</td></tr>
</table></div>

<h3>Tổn thương neuron vận động trên và dưới</h3>
<p>Neuron vận động dưới (rễ, dây ngoại biên): yếu, giảm trương lực, giảm hoặc mất phản xạ, teo cơ, giật bó sợi cơ. Neuron vận động trên (tủy, não): yếu, tăng trương lực, tăng phản xạ, Babinski dương, có thể có Hoffmann. Tăng phản xạ kèm yếu chi và rối loạn đi lại ở bệnh nhân đau cổ gợi ý bệnh lý tủy cổ và cần hình ảnh học.</p>

<h3>Giới hạn</h3>
<p>Dermatome chồng lấn nhau nên giảm cảm giác thường không cắt gọn theo một rễ. Phản xạ gót giảm hai bên có thể gặp ở người lớn tuổi mà không có bệnh. So sánh hai bên và theo dõi thay đổi theo thời gian có giá trị hơn một lần khám đơn lẻ.</p>

<div class="ev"><b>Loại bằng chứng.</b> Nội dung là kiến thức giáo khoa và đồng thuận thực hành, không có số liệu nghiên cứu riêng trong buổi này. Phân độ đau thần kinh theo Finnerup 2016 cần dấu hiệu khám phù hợp với vùng chi phối thần kinh (xem buổi sau).</div>

<div class="case"><b>Tự kiểm tra.</b> Bệnh nhân không duỗi được ngón chân cái, yếu khi đi bằng gót, mất cảm giác mu bàn chân. Rễ nào nhiều khả năng bị ảnh hưởng nhất và cần phân biệt với tổn thương dây nào?</div>
`},

"1-3": {t:"Khám cảm giác tại giường", min:15, src:["FIN16","DN4"], h:`
<p class="lead">Khám cảm giác là bước chuyển từ "nghi đau thần kinh" sang "possible hay probable" theo Finnerup 2016. Chỉ cần vài dụng cụ đơn giản và so sánh với vùng khỏe.</p>

<h3>Dụng cụ và cách làm</h3>
<div class="scrollx"><table>
<tr><th>Cảm giác</th><th>Dụng cụ</th><th>Cách làm và cách đọc</th></tr>
<tr><td>Chạm nhẹ</td><td>Bông, cọ</td><td>Chạm và so sánh với vùng đối bên. Giảm là hypoesthesia</td></tr>
<tr><td>Kim châm (đau)</td><td>Kim tù, sợi châm</td><td>Giảm là hypoalgesia; đau quá mức là hyperalgesia</td></tr>
<tr><td>Allodynia cơ học động</td><td>Cọ chải nhẹ</td><td>Cọ nhẹ qua da mà thấy đau là allodynia</td></tr>
<tr><td>Allodynia cơ học tĩnh</td><td>Ép nhẹ bằng đầu ngón tay</td><td>Ép nhẹ gây đau</td></tr>
<tr><td>Nóng, lạnh</td><td>Ống nghiệm nước ấm và lạnh hoặc dụng cụ chuyên dụng</td><td>Giảm hay tăng cảm nhận, cảm giác đau do lạnh</td></tr>
<tr><td>Rung</td><td>Âm thoa 128 Hz</td><td>Thời gian cảm nhận so với vùng khỏe hoặc xương tương ứng</td></tr>
<tr><td>Tổng hợp theo thời gian</td><td>Chạm kim lặp lại cùng điểm</td><td>Đau tăng dần theo số lần chạm</td></tr>
</table></div>
<p>Nguyên tắc: khám vùng đau, vùng quanh đó và vùng đối bên bình thường; hướng dẫn bệnh nhân trước; so sánh hai bên; ghi rõ ranh giới vùng bất thường để đối chiếu với vùng chi phối thần kinh.</p>

<h3>Triệu chứng âm và triệu chứng dương</h3>
<p>Triệu chứng âm là mất hoặc giảm chức năng (giảm cảm giác, yếu). Triệu chứng dương là hoạt động quá mức (allodynia, hyperalgesia, dị cảm, đau tự phát). Trong đau thần kinh thường gặp cả hai. Finnerup 2016 cần dấu hiệu khám có phân bố hợp lý về giải phẫu thần kinh để nâng từ possible lên probable.</p>

<h3>DN4</h3>
<p>DN4 gồm 10 mục: bảy mục hỏi triệu chứng (rát, lạnh đau, điện giật, kiến bò hoặc kim châm, tê, ngứa) và ba mục khám (giảm cảm giác chạm, giảm cảm giác kim châm, allodynia khi cọ). Mỗi mục có là 1, không là 0; cắt ngưỡng thường dùng là từ 4 điểm trở lên (em nhớ từ bài gốc, chưa kiểm lại từng số trong bài). Vai trò đúng của DN4 là sàng lọc gợi ý, không thay cho phân độ.</p>

<div class="ev"><b>Loại bằng chứng.</b> Phân độ: đồng thuận chuyên gia (Finnerup 2016, <a href="https://doi.org/10.1097/j.pain.0000000000000492" target="_blank" rel="noopener">DOI</a>). DN4: nghiên cứu thẩm định trên 160 bệnh nhân (<a href="https://doi.org/10.1016/j.pain.2004.12.010" target="_blank" rel="noopener">DOI</a>). Độ chính xác của từng nghiệm pháp tại giường riêng lẻ tôi chưa có số liệu đã kiểm chứng để nêu ở đây.</div>

<div class="case"><b>Tự kiểm tra.</b> Bệnh nhân đái tháo đường đau rát hai bàn chân, giảm kim châm kiểu tất. Em khám thêm gì và ghi thế nào để có thể xếp "probable"? Nếu muốn lên "definite" thì cần thêm gì?</div>
`},

"1-4": {t:"Nghiệm pháp cơ xương khớp", min:15, src:["LASL05","LBP"], h:`
<p class="lead">Các nghiệm pháp kích thích giúp định hướng nguồn đau. Hầu hết có độ chính xác hạn chế khi dùng riêng lẻ, nên cần kết hợp với bệnh sử và hình ảnh học.</p>

<h3>Cột sống thắt lưng: nâng chân thẳng (SLR)</h3>
<p>Bệnh nhân nằm ngửa, nâng chân duỗi thẳng. Dương tính khi tái hiện đau lan xuống chân dưới gối (không phải đau mặt sau đùi do căng cơ) trong khoảng 30–70 độ, và đau tăng khi gập mu bàn chân. SLR chéo (nâng chân lành gây đau chân bệnh) ít nhạy nhưng đặc hiệu hơn. Theo trí nhớ về tổng quan trước đây, SLR nhạy cao, đặc hiệu thấp cho thoát vị đĩa đệm; em chưa kiểm lại số liệu cụ thể trong buổi này.</p>

<h3>Cột sống cổ: nghiệm pháp Spurling</h3>
<p>Nghiêng cổ về bên đau rồi ép dọc trục. Dương tính khi tái hiện đau hoặc tê lan xuống tay. Theo trí nhớ, đặc hiệu khá nhưng độ nhạy thấp, nên âm tính không loại trừ bệnh lý rễ cổ. Số liệu này chưa kiểm chứng trong buổi.</p>

<h3>Khớp cùng chậu: bộ nghiệm pháp kích thích</h3>
<p>Các nghiệm pháp thường dùng gồm distraction, thigh thrust, compression, sacral thrust, Gaenslen và FABER (Patrick). Từng nghiệm pháp riêng lẻ chưa đủ chính xác. Trong nghiên cứu của Laslett 2005, với chuẩn tham chiếu là tiêm thuốc tê vào khớp, từ 3 trong 6 nghiệm pháp dương tính cho độ nhạy 94% và độ đặc hiệu 78%. Khi cả 6 đều không tái hiện đau quen thuộc thì có thể loại trừ khớp cùng chậu là nguồn đau. Mẫu chỉ 48 bệnh nhân nên con số cần được hiểu thận trọng (<a href="https://doi.org/10.1016/j.math.2005.01.003" target="_blank" rel="noopener">DOI</a>).</p>

<h3>Khớp mặt sau và các nguồn đau khác</h3>
<p>Khám lâm sàng đơn thuần thường không phân biệt chắc chắn đau khớp mặt sau; chẩn đoán dựa trên block nhánh trong có kiểm soát (sẽ học ở tuần 4 với đồng thuận Cohen 2020). Khớp háng có thể gây đau lan vùng mông và bẹn, cần khám tầm vận động xoay trong hông. Điểm đau cơ gợi ý hội chứng đau cơ mạc nhưng không phải tiêu chuẩn chẩn đoán rõ ràng.</p>

<div class="ev"><b>Loại bằng chứng.</b> Duy nhất số liệu đã kiểm chứng trong buổi là Laslett 2005 (nghiên cứu độ chính xác chẩn đoán cỡ mẫu nhỏ). SLR và Spurling: kiến thức giáo khoa, số liệu độ nhạy và độ đặc hiệu em chưa tra lại. Hãy mở chương Benzon tương ứng (ch. 18 và 29–30) để đối chiếu.</div>

<div class="case"><b>Tự kiểm tra.</b> Bệnh nhân đau thắt lưng thấp lệch phải, ba nghiệm pháp kích thích khớp cùng chậu dương tính, SLR âm tính. Điều này cho phép kết luận gì, và chưa cho phép kết luận gì?</div>
`},

"1-5": {t:"Soạn phiếu khám đau", min:20, src:["EDPM","FIN16"], h:`
<p class="lead">Mục tiêu buổi này: có một phiếu khám chuẩn để dùng cho mọi bệnh nhân đau mạn, ghi đủ để tuần sau có thể phân loại theo ICD-11 và theo cơ chế.</p>

<h3>Cấu trúc đề xuất</h3>
<div class="ev">
<b>1. Hành chính:</b> tuổi, nghề, nguồn chuyển, mục tiêu bệnh nhân mong muốn.<br>
<b>2. Đau:</b> vị trí (hình người), thời gian (tháng), khởi phát, tính chất, NRS hiện tại, trung bình, nặng nhất.<br>
<b>3. Yếu tố tăng, giảm; triệu chứng đi kèm:</b> tê, yếu, rối loạn cơ tròn, sụt cân, sốt.<br>
<b>4. Điều trị trước:</b> thuốc (tên, liều, thời gian, đáp ứng, tác dụng phụ), thủ thuật, vật lý trị liệu, phẫu thuật. Thuốc chống đông, chống tiểu cầu.<br>
<b>5. Cờ màu:</b> đỏ, cam, vàng, xanh dương, đen: ghi có hoặc không và chi tiết.<br>
<b>6. Chức năng:</b> hoạt động hằng ngày, giấc ngủ, khí sắc, công việc.<br>
<b>7. Khám:</b> dáng đi, sức cơ, phản xạ, cảm giác (vùng bất thường vẽ ra), nghiệm pháp cơ xương khớp.<br>
<b>8. Nhận định ban đầu:</b> nhóm ICD-11 dự kiến, cơ chế (cảm thụ, thần kinh, nociplastic), giả thuyết cần xác nhận.<br>
<b>9. Kế hoạch:</b> cận lâm sàng cần thêm, thuốc, giáo dục, hẹn tái khám.
</div>

<h3>Cách dùng</h3>
<p>Tự điền phiếu cho một bệnh nhân giả định rồi đối chiếu với mục 1.7 trong chương trình EDPM (danh mục đánh giá). Tuần 3 sẽ bổ sung các thang đo và công cụ sàng lọc để điền vào phần chức năng và tâm lý – xã hội.</p>

<div class="case"><b>Tự kiểm tra.</b> Lấy một bệnh nhân đau mạn em đã gặp gần đây (ẩn danh), điền thử phiếu. Phần nào em không có thông tin? Đó là chỗ cần bổ sung ở lần khám sau.</div>
`}
});

CARDS[2] = [
 ["Các mục chính của bệnh sử đau","Vị trí và lan; khởi phát và diễn tiến; tính chất; cường độ; yếu tố tăng giảm; triệu chứng kèm; chức năng và tâm lý; niềm tin và kỳ vọng.","EDPM"],
 ["Mô tả đau nào gợi ý đau thần kinh?","Rát, điện giật, kim châm, tê, ngứa. Chỉ gợi ý, cần khám và phân độ để xác nhận.","DN4"],
 ["Vì sao DN4 có cả mục khám lẫn mục hỏi?","Mô tả triệu chứng đơn thuần chưa phân biệt tốt đau thần kinh. DN4 có 7 mục triệu chứng và 3 mục dấu hiệu khám tại giường.","DN4"],
 ["Ba mục khám của DN4","Giảm cảm giác chạm, giảm cảm giác kim châm, allodynia khi cọ nhẹ.","DN4"],
 ["Vai trò của DN4","Sàng lọc gợi ý đau thần kinh, không thay cho phân độ possible, probable, definite.","FIN16"],
 ["Hệ cờ màu trong đánh giá đau","Đỏ: bệnh nặng; cam: tâm thần; vàng: niềm tin, cảm xúc, hành vi; xanh dương: nhận thức công việc; đen: yếu tố hệ thống và bồi thường.","EDPM"],
 ["Cờ đỏ trong đau thắt lưng có giá trị đến đâu?","Downie 2013: nhiều cờ đỏ trong guideline gần như không làm đổi xác suất gãy xương hoặc ung thư; chỉ một số cờ có giá trị rõ hơn.","DOWN13"],
 ["Cờ đỏ giá trị cao nhất cho ung thư cột sống","Tiền sử ung thư (xác suất sau test khoảng 33% trong tổng quan Downie).","DOWN13"],
 ["Khi nào xác suất gãy xương tăng rõ?","Khi có nhiều cờ đỏ cùng lúc; các cờ đáng chú ý gồm dùng corticosteroid kéo dài, chấn thương nặng, tuổi cao. Khoảng tin cậy rất rộng.","DOWN13"],
 ["Dấu hiệu gợi ý hội chứng đuôi ngựa","Tê vùng yên ngựa, bí tiểu hoặc tiểu không tự chủ, yếu chi dưới tiến triển. Cần hình ảnh học và hội chẩn khẩn.","LBP"],
 ["Tổn thương neuron vận động dưới","Yếu, giảm trương lực, giảm hoặc mất phản xạ, teo cơ, giật bó sợi cơ.","EDPM"],
 ["Tổn thương neuron vận động trên","Yếu, tăng trương lực, tăng phản xạ, Babinski dương, có thể Hoffmann dương.","EDPM"],
 ["Cơ chính của rễ L5 và S1","L5: duỗi ngón cái, đi bằng gót. S1: gập gan bàn chân, đi bằng mũi chân; phản xạ gân gót thuộc S1.","EDPM"],
 ["Allodynia cơ học động khám thế nào?","Cọ nhẹ bằng bông hoặc cọ qua da; thấy đau là dương tính. Allodynia tĩnh: ép nhẹ bằng đầu ngón.","FIN16"],
 ["Triệu chứng âm và triệu chứng dương trong đau thần kinh","Âm: giảm hoặc mất chức năng (giảm cảm giác, yếu). Dương: hoạt động quá mức (allodynia, hyperalgesia, dị cảm, đau tự phát).","FIN16"],
 ["Nguyên tắc khám cảm giác tại giường","Khám vùng đau, vùng quanh, và vùng đối bên bình thường; so sánh hai bên; ghi ranh giới vùng bất thường để đối chiếu vùng chi phối thần kinh.","FIN16"],
 ["Laslett 2005: bộ nghiệm pháp khớp cùng chậu","Từ 3 trong 6 nghiệm pháp kích thích dương tính: độ nhạy 94%, độ đặc hiệu 78% (48 bệnh nhân, chuẩn là tiêm thuốc tê vào khớp).","LASL05"],
 ["Khi nào loại trừ được khớp cùng chậu là nguồn đau?","Khi cả 6 nghiệm pháp kích thích đều không tái hiện đau quen thuộc (Laslett 2005, cỡ mẫu nhỏ nên cần thận trọng).","LASL05"]
];
QUIZ[2] = [
 ["Mục nào KHÔNG nằm trong các mục khám của DN4?",["Giảm cảm giác chạm","Giảm cảm giác kim châm","Allodynia khi cọ nhẹ","Phản xạ gân gót"],3,"DN4 có ba mục khám cảm giác: chạm, kim châm, allodynia khi cọ. Phản xạ gân không thuộc DN4.","DN4"],
 ["Vì sao nhóm tác giả đưa mục khám vào DN4 thay vì chỉ hỏi triệu chứng?",["Để rút ngắn thời gian","Vì mô tả triệu chứng đơn thuần chưa phân biệt tốt đau thần kinh","Vì bệnh nhân không biết mô tả đau","Để thay thế khám thần kinh"],1,"Bouhassira 2005 kết hợp triệu chứng với dấu hiệu khám để tăng khả năng phân biệt.","DN4"],
 ["Theo tổng quan Downie 2013, phát biểu nào đúng nhất về cờ đỏ trong đau thắt lưng?",["Mọi cờ đỏ trong guideline đều có giá trị chẩn đoán cao","Nhiều cờ đỏ gần như không làm đổi xác suất bệnh nặng","Cờ đỏ không có giá trị gì","Chỉ cần một cờ đỏ là chụp MRI ngay"],1,"Nhiều cờ đỏ chưa được kiểm chứng hoặc không làm đổi đáng kể xác suất; một số ít cờ (tiền sử ung thư, corticosteroid kéo dài...) có giá trị hơn.","DOWN13"],
 ["Bệnh nhân đau thắt lưng, có tiền sử ung thư vú cách đây 4 năm, đau về đêm tăng dần. Điều nào hợp lý nhất?",["Chỉ điều trị giảm đau và hẹn tái khám 3 tháng","Coi đây là cờ đỏ đáng chú ý và làm rõ bằng hình ảnh học phù hợp","Chuyển ngay sang can thiệp block","Giải thích đau do stress"],1,"Tiền sử ung thư là cờ đỏ có giá trị cao nhất cho ung thư cột sống trong tổng quan Downie.","DOWN13"],
 ["Dấu hiệu nào gợi ý hội chứng đuôi ngựa cần xử trí khẩn?",["Đau tăng khi cúi","Tê vùng yên ngựa kèm bí tiểu","Đau thắt lưng cách hồi","Đau mông một bên"],1,"Tê vùng yên ngựa, rối loạn cơ tròn, yếu chi dưới tiến triển cần hình ảnh học và hội chẩn khẩn.","LBP"],
 ["Bệnh nhân tăng phản xạ gân hai tay, Hoffmann dương, đi loạng choạng, kèm đau cổ. Gợi ý tổn thương ở đâu?",["Rễ thần kinh cổ đơn thuần","Neuron vận động trên, nghi bệnh lý tủy cổ","Đám rối cánh tay","Dây giữa ở cổ tay"],1,"Tăng phản xạ, Hoffmann dương và rối loạn đi lại là dấu hiệu neuron vận động trên, cần hình ảnh học tủy cổ.","EDPM"],
 ["Yếu duỗi ngón chân cái và đi bằng gót kém gợi ý rễ nào nhiều nhất?",["L3","L4","L5","S1"],2,"Duỗi ngón cái (EHL) và đi bằng gót chủ yếu do L5.","EDPM"],
 ["Allodynia cơ học động được khám bằng cách nào?",["Ép mạnh bằng ngón cái","Cọ nhẹ bằng bông hoặc cọ qua da","Châm kim sâu","Âm thoa 128 Hz"],1,"Cọ nhẹ qua da mà thấy đau là allodynia cơ học động.","FIN16"],
 ["Theo Laslett 2005, từ 3 trong 6 nghiệm pháp kích thích khớp cùng chậu dương tính cho kết quả nào?",["Nhạy 94%, đặc hiệu 78%","Nhạy 50%, đặc hiệu 99%","Nhạy 78%, đặc hiệu 94%","Chỉ dùng được cho chẩn đoán loại trừ"],0,"Nghiên cứu 48 bệnh nhân với chuẩn là tiêm thuốc tê vào khớp; cỡ mẫu nhỏ nên cần thận trọng.","LASL05"],
 ["Điều nào đúng về DN4 trong chẩn đoán đau thần kinh?",["Thay thế phân độ possible, probable, definite","Là công cụ sàng lọc gợi ý, không thay cho khám và phân độ","Cho kết quả definite khi từ 4 điểm","Chỉ dùng cho đau sau zona"],1,"DN4 gợi ý khả năng đau thần kinh; phân độ cần tiền sử, khám và xét nghiệm xác nhận (Finnerup 2016).","FIN16"]
];
