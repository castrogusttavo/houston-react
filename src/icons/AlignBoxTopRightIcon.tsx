import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlignBoxTopRightIcon({
  iconName = 'align-box-top-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
