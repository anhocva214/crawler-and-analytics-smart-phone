import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h1 style={{ color: '#ff0000' }}> Group Name: LOL TEAM</h1>
      <h2 style={{ color: '#71d50f' }}>Graph data consists of graphs:</h2>
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="https://week.w3spaces.com/Python/Total_Category.png">
            <img src="https://week.w3spaces.com/Python/Total_Category.png" width={600} height={400} />
          </a>
          <div className="desc">Total_Category</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="https://week.w3spaces.com/Python/so_luot_xem_trung_binh_moi_the_loai.png">
            <img src="https://week.w3spaces.com/Python/so_luot_xem_trung_binh_moi_the_loai.png" width={600} height={400} />
          </a>
          <div className="desc">Số lượt xem trung bình mỗi thể loại</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="https://week.w3spaces.com/Python/the_loai_it_nhung_nhieu_luot_xem_nhat.png">
            <img src="https://week.w3spaces.com/Python/the_loai_it_nhung_nhieu_luot_xem_nhat.png" width={600} height={400} />
          </a>
          <div className="desc">Thể loại có ít truyện nhưng nhiều lượt xem nhất</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="https://week.w3spaces.com/Python/the_loai_co_nheu_truyen_nhung_it_luot_xem.png">
            <img src="https://week.w3spaces.com/Python/the_loai_co_nheu_truyen_nhung_it_luot_xem.png" width={600} height={400} />
          </a>
          <div className="desc">Thể loại có nhiều chuyện nhưng ít lượt xem</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="https://week.w3spaces.com/Python/Ti_le_truyen_theo_quoc_gia-copy.png">
            <img src="https://week.w3spaces.com/Python/Ti_le_truyen_theo_quoc_gia-copy.png" width={600} height={400} />
          </a>
          <div className="desc">Tỉ lệ truyện theo quốc gia</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="https://week.w3spaces.com/Python/15_tac_gia_co_luot_xem_nhieu_nhat.png">
            <img src="https://week.w3spaces.com/Python/15_tac_gia_co_luot_xem_nhieu_nhat.png" width={600} height={400} />
          </a>
          <div className="desc">Top 15 tác giả có lượt xem nhiều nhất</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="https://week.w3spaces.com/Python/Top5_chuyen_co_so_luot_xem_nhieu_nhat.png">
            <img src="https://week.w3spaces.com/Python/Top5_chuyen_co_so_luot_xem_nhieu_nhat.png" width={600} height={400} />
          </a>
          <div className="desc">Top 5 chuyện có số lượt xem nhiều nhất</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="https://week.w3spaces.com/Python/view_count-copy.png">
            <img src="https://week.w3spaces.com/Python/view_count-copy.png" width={600} height={400} />
          </a>
          <div className="desc">View_count</div>
        </div>
      </div>
      <div className="clearfix" />
      <div style={{ padding: '6px' }}>
      </div>
    </>
  )
}
