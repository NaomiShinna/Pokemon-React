import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import useListPokemon from "../useGetImagePokemon";
   
  const CardPokemon = (childrenName, childrenImage) => {
    return (
      <Card className="w-100">
            
      <CardBody className="text-center">
      <img className=""src={useGetImagePokemon(childrenImage)}></img>
        <Typography variant="h6" className="mb-2">
          {childrenName}
        </Typography>
      </CardBody>
    </Card>
    )
  }
  export default CardPokemon;