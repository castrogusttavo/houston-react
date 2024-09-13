import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlignBoxTopCenterIcon({
  iconName = 'align-box-top-center',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
