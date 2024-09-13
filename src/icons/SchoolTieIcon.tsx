import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SchoolTieIcon({
  iconName = 'school-tie',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
