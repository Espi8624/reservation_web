function ReservationCheckPage() {
  return (
    <>
      <div className="content">
        <div className="content_title">
          <div className="content_title_text">近づいている予約</div>
          <div className="content_title_icon">+</div>
        </div>
        <div className="content_card">
          <div>店名</div>
          <div>予約内容</div>
          <div>予約日</div>
          <div>予約時間</div>
          <div>住所</div>
          <div>担当者</div>
        </div>
      </div>


      <div className="content">
        <div className="content_title">
          <div className="content_title_text">予約履歴</div>
          <div className="content_title_icon">+</div>
        </div>
      </div>

      <div className="content">
        <div className="content_title">
          <div className="content_title_text">先日予約履歴</div>
          <div className="content_title_icon">+</div>
        </div>
      </div>
    </>
  );
}

export default ReservationCheckPage;