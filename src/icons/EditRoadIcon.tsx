import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EditRoadIcon({ iconName = 'edit-road', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
