import { Disclosure } from '@headlessui/react'
import {BsChevronDoubleUp,BsChevronDoubleDown } from 'react-icons/bs';

const PlaysFilter=(props)=> {
    return (
        
        <Disclosure>
        
          {({ open }) => (
           
           <>
           <Disclosure.Button className="py-2 flex ites-center gap-3" >
           {open ? <BsChevronDoubleDown /> : <BsChevronDoubleUp/>}
            <span className={open?"text-red-600":"text-rey-700"}>{props.title}</span>
           </Disclosure.Button>
           <Disclosure.Panel className="text-rey-500">
            <div className="flex flex-wrap item-center gap-3">
                {props.tag.map((tag)=>(
                    <>
                    <div className="border-2 border-grey-400 p-3" >
                        <span className="text-red-600">{tag}</span>
                    </div>
                    </>
                ))}
            </div>
           </Disclosure.Panel>

           </>
          )}
        </Disclosure>
      )
}

export default PlaysFilter;