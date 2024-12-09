import React from 'react'
import './Contact.css'
function Contact() {
  return (
   <>
<div className="outer">
<div className="photoNewDiv">
    <div className="getInTouch">
        <span>Get in Touch</span>
    <div className="tagLine">Get Your queries cleared and obtain an efficient solution by contacting our service center</div>
    </div>
</div>
<div className="contactDiv">
    <div className="coverDiv">
        <div className="leftDiv">
            <div className="iconDiv">
            <i class="fa-solid fa-phone"></i>
            <p>Talk to Sales</p>
            </div>
            <div className="inInfoDiv">
                Contact our Service Center , and our customer help desk will reach out to you..
            </div>
            <div className="phNoDiv">
                <div className="phNo">7899802208</div>
                <div className="viewGlobal">View Global Numbers </div>
                <div className="cheveronDown"><i class="fa-solid fa-chevron-down"></i></div>
            </div>
        </div>
        <div className="rightDiv">
        <div className="iconDiv">
        <i class="fa-solid fa-comments"></i>
            <p>Drop Your query</p>
            </div>
            <div className="inInfoDiv">
               You can post your query, problems or any questions related to the product and our experts will reach back to you..
            </div>
            <div className="phNoDiv">
                <button className="supportBtn">Contact Support</button>
            </div>
        

        </div>
    </div>

</div>

<div className="mapDiv">
<h1>Connect with Our Global Office</h1>

    <div className="map">
    <div className="mapEmbeddings"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1878.5502585647166!2d77.49631939839473!3d12.923722800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1733762401924!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    <div className="mapDetails">
        <div className="headQuarters">
            <span className="headingHeadQuaters">Headquarters</span>
            <div className="quartersInfo">R. V. College of Engineering, Mysore Rd, RV Vidyaniketan, Post, Bengaluru, Karnataka 560059</div>
        </div>
        <div className="phoneFax">
            <span className="headingphoneFax">Phone/ Fax</span>
            <div className="phoneInfo">
                <span>7899802208</span>
                <span>7980204808</span>
                </div>
        </div>
        <div className="pressMedia">
            <span className="headingpressMedia">Press/Media/Blogger/Information</span>
            <div className="mediaInfo">Visit our nearest showroom</div>
        </div>
    </div>
    </div>
</div>
</div>

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.1000621476605!2d77.49617732491747!3d12.923753037387208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1733555431611!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<footer className="footerDiv">Hi This is footer</footer> */}
</>
  )
}

export default Contact
