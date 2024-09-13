import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlignVerticalCenterIcon({
  iconName = 'align-vertical-center',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
