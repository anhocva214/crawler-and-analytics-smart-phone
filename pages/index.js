import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h1 style={{ color: '#ff0000' }}> Group Name: LOL TEAM</h1>
      <h2 style={{ color: '#71d50f' }}>Graph data consists of graphs:</h2>
      <div>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="https://i.pinimg.com/originals/b3/30/b3/b330b3745bb725d44d034ab3605432b8.jpg">
              <img src="https://i.pinimg.com/originals/b3/30/b3/b330b3745bb725d44d034ab3605432b8.jpg" width={600} height={400} />
            </a>
            <div className="desc">Total_Category</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="https://i.pinimg.com/originals/63/a2/ce/63a2ceabadee57165f7e5c696b95bec0.jpg">
              <img src="https://i.pinimg.com/originals/63/a2/ce/63a2ceabadee57165f7e5c696b95bec0.jpg" width={600} height={400} />
            </a>
            <div className="desc">Số lượt xem trung bình mỗi thể loại</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="https://i.pinimg.com/originals/c1/68/d2/c168d2b44f1cab5417afac95f2a8727b.jpg">
              <img src="https://i.pinimg.com/originals/c1/68/d2/c168d2b44f1cab5417afac95f2a8727b.jpg" width={600} height={400} />
            </a>
            <div className="desc">Thể loại có ít truyện nhưng nhiều lượt xem nhất</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="https://i.pinimg.com/originals/64/3d/59/643d5921a3248ca6073b991fdc19f4aa.jpg">
              <img src="https://i.pinimg.com/originals/64/3d/59/643d5921a3248ca6073b991fdc19f4aa.jpg" width={600} height={400} />
            </a>
            <div className="desc">Thể loại có nhiều chuyện nhưng ít lượt xem</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="https://i.pinimg.com/originals/cd/34/fe/cd34fef72ffd8ede6e68006dd77860a0.jpg">
              <img src="https://i.pinimg.com/originals/cd/34/fe/cd34fef72ffd8ede6e68006dd77860a0.jpg" width={600} height={400} />
            </a>
            <div className="desc">Tỉ lệ truyện theo quốc gia</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="https://i.pinimg.com/originals/b0/c8/45/b0c845866e07350c4489c7a901a1bbfa.jpg">
              <img src="https://i.pinimg.com/originals/b0/c8/45/b0c845866e07350c4489c7a901a1bbfa.jpg" width={600} height={400} />
            </a>
            <div className="desc">Top 15 tác giả có lượt xem nhiều nhất</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="https://i.pinimg.com/originals/d5/ba/83/d5ba8341ed301acfa1f12b73e96dce0f.jpg">
              <img src="https://i.pinimg.com/originals/d5/ba/83/d5ba8341ed301acfa1f12b73e96dce0f.jpg" width={600} height={400} />
            </a>
            <div className="desc">Top 5 chuyện có số lượt xem nhiều nhất</div>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="https://i.pinimg.com/originals/dd/0c/a4/dd0ca4dd9333d613582b4631e4f83af5.jpg">
              <img src="https://i.pinimg.com/originals/dd/0c/a4/dd0ca4dd9333d613582b4631e4f83af5.jpg" width={600} height={400} />
            </a>
            <div className="desc">View_count</div>
          </div>
        </div>
        <div className="clearfix" />
        <div style={{ padding: '6px' }}>
        </div>
      </div>

    </>
  )
}
