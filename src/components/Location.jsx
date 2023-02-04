export default function Location({city}){
    return(
        <div className="flex items-center justify-center bg-[hsla(40,98%,58%,15%)] w-[100%] h-[72px]">
            <h3 className="text-mobile-h3 text-dark-navy">{city}</h3>
        </div>
    )
}