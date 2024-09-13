import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WorkHistoryIcon({
  iconName = 'work-history',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
