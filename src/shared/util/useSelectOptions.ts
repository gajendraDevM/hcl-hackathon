import React from 'react'
import { useFetchAll } from '../../api/useApihook'

export  function useSelectOptions(item:any) {


    const {data, isLoading, isError, refetch } = useFetchAll(`${item}`)




  return {data, isLoading}
}
