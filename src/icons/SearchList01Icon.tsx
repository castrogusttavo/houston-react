import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SearchList01Icon({
  iconName = 'search-list-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
