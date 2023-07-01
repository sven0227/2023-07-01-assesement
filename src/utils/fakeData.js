export const studentIdsTableData = [0, 1, 2, 3, 4, 5, 6, 7].map(
  (value, index) => {
    return {
      id: index,
      name: 'Jone Doe-' + index,
      studentId: index
    }
  }
)

export const studentsTableData = [0, 1, 2, 3, 4, 5, 6, 7].map(
  (value, index) => {
    return {
      id: index,
      schoolId: index,
      legalguardianId: index
    }
  }
)

export const schoolsTableData = [0, 1, 2, 3, 4, 5, 6, 7].map((value, index) => {
  return {
    id: index,
    schoolName: 'School-' + index,
    schoolLocation: 'Location-' + index
  }
})

export const legalguardiansTableData = [0, 1, 2, 3, 4, 5, 6, 7].map(
  (value, index) => {
    return {
      id: index,
      legalguardianName: 'guardian-' + index
    }
  }
)
