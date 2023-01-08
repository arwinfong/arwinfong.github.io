export default function Footer() {
    return(
        <div className="bg-black border-t-2 border-[#979797] p-5 h-[200px] flex items-center justify-center" id="contact">
            <a href="https://www.linkedin.com/in/arwin-fong-9204ba221/">
                <img src="images/linkedin.png" className="w-12 m-5"/>
            </a>
            <a href="https://github.com/arwinfong">
                <img src="images/github.png" className="w-12 m-5"/>
            </a>
            <a href="mailto: arwinfong@gmail.com">
                <img src="images/email.png" className="w-14 m-5"/>
            </a>
        </div>
    )
}