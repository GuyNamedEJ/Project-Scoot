import AppStore from '../assets/icons/app-store.svg'
import PlayStore from '../assets/icons/google-play.svg'

export default function SignUpbanner(){
    return(
        <div className="bg-[#495567] bg-[length:1153px] bg-no-repeat bg-[bottom_right_-11rem] bg-banner-pattern no-repeat h-[320px] flex flex-col items-center justify-center gap-10 px-8">
            <h2 className="text-center font-space text-snow text-mobile-h2 tracking-[-1.43px]">Sign up and Scoot off today</h2>
            <div className='flex gap-4 items-center justify-center'>
                <img src={AppStore} width="113.57px" height="40px" alt="" />
                <img src={PlayStore} width="130px" height="40px" alt="" />
            </div>
        </div>
    )
}