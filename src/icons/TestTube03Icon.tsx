import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TestTube03Icon({
  iconName = 'test-tube-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
