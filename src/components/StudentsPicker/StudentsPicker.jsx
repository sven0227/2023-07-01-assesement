import './StudentsPicker.module.css'
import { studentIdsTableData } from '../../utils/fakeData'

const StudentsPicker = ({ onPickHandler }) => {
  return (
    <>
      <h2>StudentsPicker</h2>
      <div className='d-flex flex-column'>
        {studentIdsTableData.map(student => (
          <label className='p-1'>
            <input type='checkbox' className='form-check-input' value={'sdf'} />
            <span className='p-2'>{student.name}</span>
          </label>
        ))}
      </div>
    </>
  )
}

export default StudentsPicker
