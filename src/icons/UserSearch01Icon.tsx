import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserSearch01Icon({
  iconName = 'user-search-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
