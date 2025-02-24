import React from 'react'
import './Home.css'

const Home = () => {
  return (
    
   <>
  <div>
  <div className="container-fluid p-0">
    {/* Wallpaper Section */}
    <div className="wallpaper-section">
      <img src="https://i.ebayimg.com/images/g/98wAAOSwyeRkh-gn/s-l1600.webp" alt="Wallpaper 1" />
    </div>
    {/* Buttons Section */}
    <div class="container-fluid mt-3">
            <div class="buttons-section">
                <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas1">Recipe 1</button>
                <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas2">Recipe 2</button>
                <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas3">Recipe 3</button>
                <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas4">Recipe 4</button>
                <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas5">Recipe 5</button>
                <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas6">Recipe 6</button>
                <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas7">Recipe 7</button>
                <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas8">Recipe 8</button>
                <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas9">Recipe 9</button>
                <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas10">Recipe 10</button>
            </div>
        </div>
  </div>
  {/* Offcanvas Sections */}
  <div className="offcanvas offcanvas-end" id="offcanvas1">
    <div className="offcanvas-header">
      <h5>Offcanvas 1</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
    </div>
    <div className="offcanvas-body">Content for offcanvas 1</div>
  </div>
</div>

   
   </>
    

  )
}

export default Home