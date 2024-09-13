import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallEnd01Icon({
  iconName = 'call-end-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
