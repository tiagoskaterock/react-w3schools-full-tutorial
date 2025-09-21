import Car from './Car';

const cars = [
    {
        name: 'Monza',
        id: 1
    },
    {
        name: 'Chevette',
        id: 2
    },
    {
        name: 'Belina',
        id: 3
    },
    {
        name: 'Variant',
        id: 4
    },
]

function Garage() {
  return (
    <>
        <h1>Who lives in my garage?</h1>
        {cars.map((car) => (
            <Car key={car.id} name={car.name} />
        ))}
    </>
  );
}

export default Garage;
