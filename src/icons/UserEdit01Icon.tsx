import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserEdit01Icon({
  iconName = 'user-edit-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
