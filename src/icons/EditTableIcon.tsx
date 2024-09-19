import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EditTableIcon({
  iconName = 'edit-table',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
