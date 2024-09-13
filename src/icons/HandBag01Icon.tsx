import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HandBag01Icon({
  iconName = 'hand-bag-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
