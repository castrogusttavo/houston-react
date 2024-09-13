import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EditOffIcon({ iconName = 'edit-off', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
