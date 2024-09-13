import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TwoFinger01Icon({
  iconName = 'two-finger-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
