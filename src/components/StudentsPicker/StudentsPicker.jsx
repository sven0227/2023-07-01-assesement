import { useEffect, useState } from 'react'
import './StudentsPicker.css'
import { studentIdsTableData } from '../../utils/fakeData'

const StudentsPicker = ({ onPickHandler }) => {
  const [studentIdsData, setStudentIdsData] = useState([])

  useEffect(() => {
    const idsData = studentIdsTableData.map(student => {
      return {
        ...student,
        checked: false
      }
    })
    setStudentIdsData(idsData)
  }, [])

  const handleOnCheck = (e, id) => {
    const idsData = studentIdsData.map(student => {
      if (id === student.id) {
        return {
          ...student,
          checked: e.target.checked
        }
      } else {
        return student
      }
    })
    let ids = []
    idsData.map(student => student.checked && ids.push(student.id))
    setStudentIdsData(idsData)
    onPickHandler(ids)
  }

  return (
    <>
      <h2>StudentsPicker</h2>
      <div className='d-flex flex-column'>
        {studentIdsData.map((student, index) => (
          <label className='p-1 student-checkbox' key={index}>
            <input
              type='checkbox'
              className='form-check-input'
              checked={student.checked}
              onChange={e => handleOnCheck(e, index)}
            />
            <span className='p-2'>{student.name}</span>
          </label>
        ))}
      </div>
    </>
  )
}

export default StudentsPicker
