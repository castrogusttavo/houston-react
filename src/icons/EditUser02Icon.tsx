import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EditUser02Icon({
  iconName = 'edit-user-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
