import React from 'react'
import { useState } from 'react'


const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
  })
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  const message = `Kart Üzerindeki İsim: ${formData.name}\nKart Numarası: ${formData.cardNumber}\nAy: ${formData.month}\nYıl: ${formData.year}\nGüvenlik Kodu: ${formData.cvv}`;

  alert(message);
  }
  return (
    <form onSubmit={handleSubmit} className=" flex-justify-start items-center h-85 w-95 border-gray-400 border-1 rounded shadow-sm mx-auto mt-40 flex-col p-4">
      <h1 className="font-bold text-2xl">Ödeme Bilgileri</h1>
      <p className="text-gray-600 text-sm ">Kredi kartı bilgilerinizi giriniz</p>
      <h1 className='font-bold mt-4'>Kart Üzerindeki İsim</h1>
      <input className="w-83 border-1 rounded border-gray-500" type="text" placeholder='Ahmet Yılmaz' name="name" value={formData.name} onChange={handleChange}/>
      <h1 className='font-bold mt-4'>Kart Numarası</h1>
      <input className="w-83 border-1 rounded border-gray-500" type="text" placeholder='0000 0000 0000 0000' name="cardNumber" value={formData.cardNumber} onChange={handleChange}/>
      <div>
        <h1 className='mt-4 font-bold'>Ay</h1>
        <div className='flex space-x-4'>
        <select className="w-20 border-1 rounded border-gray-500" id="" name="month" value={formData.month} onChange={handleChange}>
          <option className=""value="Ay" disabled hidden>Ay</option>
          <option className=""value="1">1</option>
          <option className=""value="2">2</option>
          <option className=""value="3">3</option>
          <option className=""value="4">4</option>
          <option className=""value="5">5</option>
          <option className=""value="6">6</option>
          <option className=""value="7">7</option>
          <option className=""value="8">8</option>
          <option className=""value="9">9</option>
          <option className=""value="10">10</option>
          <option className=""value="11">11</option>
          <option className=""value="12">12</option>
        </select>
        <h1 className='-mt-6  font-bold'>Yıl</h1>
        <select className="-ml-8 w-20 border-1 rounded border-gray-500" id="" name="year" value={formData.year} onChange={handleChange}>
          <option value="Yıl" disabled hidden>Yıl</option>
          <option value="">2025</option>
          <option value="">2026</option>
          <option value="">2027</option>
          <option value="">2028</option>
          <option value="">2029</option>
          <option value="">2030</option>
          <option value="">2031</option>
        </select>
        <h1 className='font-bold -mt-6'>Güvenlik Kodu</h1>
        <input type="text" placeholder='CVV'className='-ml-32 border-1 rounded border-gray-500 w-35 ' name="cvv" value={formData.cvv} onChange={handleChange}/>
        </div>
      </div>
      <button type="submit"className='flex flex-col mt-4 bg-black text-white rounded text-center w-83 h-10 justify-center font-bold'>Şimdi Öde</button>
   
    </form>
  )
}

export default App