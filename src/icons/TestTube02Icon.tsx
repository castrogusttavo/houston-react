import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TestTube02Icon({
  iconName = 'test-tube-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
