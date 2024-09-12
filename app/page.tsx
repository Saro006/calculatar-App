
import Calculator from '@/components/Calculator'
export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
        <div className="w-full text-center bg-fixed flex justify-center items-center text-4xl neon-text py-11 pt-10">correct your Calculation</div>
        <div className='flex justify-center items-center py-11 pt-35 bg-fixed'>
        <Calculator />
        </div>
      </div>

  );
}
