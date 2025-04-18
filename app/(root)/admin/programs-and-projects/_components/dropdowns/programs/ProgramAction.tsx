import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React, { useState } from 'react'
import { FiDelete } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { useRouter } from 'next/navigation';
import { EditIcon, RedDeleteIcon } from '@/assets/icons'
import { FaEye } from 'react-icons/fa6'
import DeleteAction from './DeleteAction'


const ProgramAction = ({programData}: any) => {
  const [dialog, setDialog] = useState(0);
  const router = useRouter();
  return (
    <Dialog>
      {dialog === 1 && <DeleteAction id={programData?.arcnProgramId}/>}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
        <Button className="bg-white border-2 border-[#d1d5db] hover:bg-white"><IoIosArrowDown color="#4b5563" /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="bg-white border-none shadow-xl"
          align="end"
        >
          <DropdownMenuItem
            className="flex justify-start gap-3 items-center cursor-pointer"
            onClick={() => router.push(`/admin/programs-and-projects/programs/${programData?.arcnProgramId}`)}
          >
            <EditIcon className="scale-95" /> <span>Edit</span>
          </DropdownMenuItem>
          <DialogTrigger asChild>
            <DropdownMenuItem
              className="flex justify-start gap-3 items-center cursor-pointer"
              onClick={() => {
                setDialog((prev) => (prev = 1));
              }}
            >
              <RedDeleteIcon className="scale-95" /> <span>Delete</span>
            </DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  )
}

export default ProgramAction