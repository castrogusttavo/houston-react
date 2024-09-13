import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextAlignCenterIcon({
  iconName = 'text-align-center',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
