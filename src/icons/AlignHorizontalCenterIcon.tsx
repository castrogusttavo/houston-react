import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlignHorizontalCenterIcon({
  iconName = 'align-horizontal-center',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
