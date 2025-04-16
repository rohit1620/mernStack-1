

const page = async({params}) => {
    // console.log(params.id);
  const resolveParams= await params;
  
  
  return (
    <div>
      <h1>This is dynamic route {resolveParams.id}</h1>
    </div>
  )
}

export default page
