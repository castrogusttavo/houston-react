import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlignBoxTopLeftIcon({
  iconName = 'align-box-top-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
