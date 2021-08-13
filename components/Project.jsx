export default function Project({ title, description, image }) {
  return (
    <div className='p-5 border shadow-sm'>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
