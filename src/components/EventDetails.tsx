import { MagicCard } from "./ui/magic-card"
import { Button } from "@/components/Button"
import { Edit2, Heading, Trash2 } from "lucide-react"

interface EventDetailsProps{
    isAdmin: Boolean;
    Heading: String;
    Description: String;
    formLink ?: String;
}
export const EventDetails = (props: EventDetailsProps)=>{
    return(
        <div className="bg-white w-80 h-96">
            <MagicCard className="p-5">
                <div className="child">
                    <img className="rounded-lg" width={300} src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75" ></img>
                    <div className="m-2 Event Heading text-center w-full font-bold text-2xl font-sans">
                        {props.Heading}
                    </div>
                    <div className=" max-h-60 text-sm mb-0 text-justify  text-wrap">
                        <p>{props.Description}</p> 
                    </div>
                    {props.isAdmin && <div className="flex justify-between">
                        <Button startIcon={<Trash2 size={20}/>} variant="secondary" size="sm" text= "Delete Event" ></Button>
                        <Button startIcon={<Edit2 size={20}/>} variant="secondary" size="sm" text= "Edit Event" ></Button>
                    </div>}
                    {
                        !props.isAdmin &&
                        <div className="w-full flex items-center justify-center">
                            <Button  variant="secondary" size="md"  text= "Register Now!" ></Button>
                        </div>
                    }
                </div>
            </MagicCard>
        </div>

    )

}