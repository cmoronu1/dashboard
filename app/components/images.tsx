import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ImageInterface{
    image:string;
}
export function Images({image}:ImageInterface){
    return (
        <div>
            <Avatar>
              <AvatarImage src={image} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}