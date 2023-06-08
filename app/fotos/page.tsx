const category = async ()  => {
  return await fetch('/api/category')
  .then(res => res.json())

}

export default async function page () {
  const data = await category()

  console.log(data)

  return (
    <div>
      fotos
    </div>
  )
}
