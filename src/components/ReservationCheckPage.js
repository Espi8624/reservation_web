function ReservationCheckPage() {
  return (
    <>
      <div className="content">
        <div className="content_title">
          <div className="content_title_text">近づいている予約</div>
          <div className="content_title_icon">+</div>
        </div>
        <div className="content-card">
          <div className="content-card-pic">担当者</div>
          <div className="content-card-store">店名</div>
          <div className="content-card-content">予約内容</div>
          <div className="content-card-location">住所</div>
          <div className="content-card-date">予約日</div>
          <div className="content-card-time">予約時間</div>
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