import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MaskLoveIcon({ iconName = 'mask-love', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
