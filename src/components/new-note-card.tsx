import * as Dialog from '@radix-ui/react-dialog'
import {X} from 'lucide-react'

export function NewNoteCard () {
    return (  
        
        <Dialog.Root>
          <Dialog.Trigger className='rounded-md flex flex-col text-left bg-slate-700 p-5 gap-3 overflow-hidden outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
              <span className='text-small font-medium text-slate-200'>
                Adicionar nota
                </span>
              <p className='text-small leading-6 text-slate-400'>
                Grave uma nota em áudio que será convertido para texto automaticamente.
                </p>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className='inset-0 fixed bg-black/60'/>
              <Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none'>
                <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400'>
                  < X className='size-5 hover:text-slate-50'/>
                </Dialog.Close>
                
                <div className='flex flex-1 flex-col gap-3 p-5'>
                <span className='text-small font-medium text-slate-300'>
                  Adicionar nota
                </span>

                <p className='text-small leading-6 text-slate-400'>
                Comece <button className="font-medium text-lime-400">gravando uma nota</button> em áudio ou se preferir, <button className="font-medium text-lime-400">utilize apenas texto.</button>
                </p>
                </div>
                <button className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500" type='button'>
                  Salvar nota 
                </button>
              </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>


    )
}